import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { PointsModalComponent } from './points-modal/points-modal.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    AngularFireDatabaseModule
  ],
  declarations: [Tab1Page, PointsModalComponent],
  entryComponents: [PointsModalComponent]
})
export class Tab1PageModule {}
