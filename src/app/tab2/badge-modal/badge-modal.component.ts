import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Badge } from '../tab2.page';
@Component({
  selector: 'app-badge-modal',
  templateUrl: './badge-modal.component.html',
  styleUrls: ['./badge-modal.component.scss']
})
export class BadgeModalComponent implements OnInit {
  badge: Badge;
  constructor(
    private navParams: NavParams,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.badge = JSON.parse(this.navParams.get('badge'));
    console.log(this.badge);
  }

  close() {
    this.modalController.dismiss();
  }


}
