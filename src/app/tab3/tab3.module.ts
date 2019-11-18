import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ConductorDetallePage } from '../conductor-detalle/conductor-detalle.page';
import { ConductorDetallePageModule } from '../conductor-detalle/conductor-detalle.module';

@NgModule({
  entryComponents: [
    ConductorDetallePage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConductorDetallePageModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
