import {Component, Input, OnInit} from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { Ruta } from 'src/app/models/ruta';
import { ConductorService } from 'src/app/services/conductor.service';
import { ReporteService } from 'src/app/services/reporte.service';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController, ModalController, NavController, AlertController } from '@ionic/angular';
import { RutaService } from '../services/ruta.service';
import {ConductorDetallePage} from '../conductor-detalle/conductor-detalle.page';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  conductores: Conductor;

  constructor(
    private menu: MenuController, 
    private authService: AuthService,
    private reporteService: ReporteService,
    private conductorService: ConductorService,
    public alertCtrl: AlertController,
    private rutaService: RutaService,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }


  ionViewWillEnter() {
    this.conductorService.getConductores().subscribe(
      response => {
        this.conductores = response;
        console.log(response);
      }
    );
    
  }

  reportar(form: NgForm) {
    console.log(form.value.conductor_id);

    //var str="wdwdwdfewfewfwefew";
    //console.log(str);
    //console.log(str.substring(2,5));

      this.reporteService.reportar(
        
        form.value.conductor_id,
        //form.value.birthDate
        
        ).subscribe(
          data => {
            console.log("Reporte realizado");
            this.presentAlert();
          },
          error => {
            console.log(error);
            this.cancelAlert();
          },
          () => {
            
          }
        );
    }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Mensaje',
      //subHeader: 'Subtitle',
      message: 'Reporte realizado correctamente',
      buttons: ['Continuar']
    });
    await alert.present();
  }
  async cancelAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Mensaje',
      //subHeader: 'Subtitle',
      message: 'El reporte no fue realizado',
      buttons: ['Continuar']
    });
    await alert.present();
  }
}
