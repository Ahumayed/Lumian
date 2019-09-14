import { Component, OnInit, NgZone } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseDatabase } from '@angular/fire';
import { PointsModalComponent } from './points-modal/points-modal.component';

export enum PowerLevel {
  L1 = 'L1',
  L2 = 'L2',
  L3 = 'L3',
  L4 = 'L4',
  L5 = 'L5'
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  powerLevel: string;
  reading = 0;
  points = 4872;
  plant: string;
  db: FirebaseDatabase;
  constructor(
    private toastController: ToastController,
    private fireBase: AngularFireDatabase,
    private zone: NgZone,
    private modalController: ModalController
    ) {}


  ngOnInit(): void {
    this.powerLevel = PowerLevel.L1;

    this.db = this.fireBase.database;

    this.db.ref('readings').on('value', value => this.update(value));
  }

  update(value) {
    this.zone.run(() => {
      this.reading = value.val().reading;

      if (this.reading <= 20) {
        this.plant = '/assets/plant-high.png';
      } else if (this.reading <= 25) {
        this.plant = '/assets/plant-mid.png';
      } else if (this.reading >= 30 || this.reading >= 25) {
        this.plant = '/assets/plant-low.svg';
      }
    });
  }

  async presentToast() {
    this.toastController.dismiss();
    const toast = await this.toastController.create({
      message: '24 degrees is the recommended temperature for ac power consumption',
      header: 'Hint',
      position: 'middle',
      translucent: true,
      cssClass: 'my-toast',
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
        }
      ],


    });
    toast.present();
  }

  onClickPoints() {
    this.modalController.create({
      component: PointsModalComponent
    }).then(modal => {
      modal.present();
    });
  }


}
