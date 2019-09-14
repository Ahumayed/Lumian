import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { BadgeModalComponent } from './badge-modal/badge-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  entryComponents: [BadgeModalComponent],
  declarations: [Tab2Page, BadgeModalComponent],
  exports: [BadgeModalComponent]
})
export class Tab2PageModule {}
