import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-points-modal',
  templateUrl: './points-modal.component.html',
  styleUrls: ['./points-modal.component.scss']
})
export class PointsModalComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

}
