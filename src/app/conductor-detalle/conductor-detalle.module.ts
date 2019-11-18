import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConductorDetallePage } from './conductor-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConductorDetallePage]
})
export class ConductorDetallePageModule {}
