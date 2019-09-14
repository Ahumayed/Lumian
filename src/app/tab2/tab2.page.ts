import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BadgeModalComponent } from './badge-modal/badge-modal.component';

export interface Badge {
  name: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  BADGES: Badge[] = [
    {
        name: '??????',
        url: '/assets/badges/Asset 2.png',
        description: '??????????????'
    },
    {
      name: '??????',
      url: '/assets/badges/Asset 3.png',
      description: '??????????????'
  },
  {
    name: '??????',
    url: '/assets/badges/Asset 4.png',
    description: '??????????????'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 11.png',
  description: 'Badge 1 is good!'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 12.png',
  description: 'Badge 1 is good!'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 13.png',
  description: 'Badge 1 is good!'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 8.png',
  description: 'Badge 1 is good!'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 9.png',
  description: 'Badge 1 is good!'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 10.png',
  description: 'Badge 1 is good!'
},
{
  name: 'badge1',
  url: '/assets/badges/Asset 5.png',
  description: 'Badge 1 is good!'
},
{
  name: 'Planet Hero',
  url: '/assets/badges/Asset 6.png',
  description: 'You eraned this badge for staying on top of your neighborhood for 2 weeks straight!'
},
{
  name: 'Green Thumb',
  url: '/assets/badges/Asset 7.png',
  description: 'You earned this badge for generating the most energy this Month!'
},


  ];
  constructor(public modalController: ModalController) {
    this.BADGES = this.BADGES.reverse();
  }

  open(badge: Badge) {
    this.modalController.create({
      component: BadgeModalComponent,
      componentProps: {badge: JSON.stringify(badge)}
    }).then(modal => {
      modal.present();
    });
  }

}
