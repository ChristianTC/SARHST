import { Component, OnInit } from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { Ruta } from 'src/app/models/ruta';
import { ConductorService } from 'src/app/services/conductor.service';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { RutaService } from '../services/ruta.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  conductores: Conductor;
  rutas: Ruta;

  constructor(
    private menu: MenuController, 
    private authService: AuthService,
    private conductorService: ConductorService,
    private rutaService: RutaService,
  ) { }

  ngOnInit() {
  }
  refresh() {
    window.location.reload();
  }
  ionViewWillEnter() {
    this.conductorService.getConductores().subscribe(
      response => {
        this.conductores = response;
        console.log(response);
      }
    );
    this.rutaService.getRutas().subscribe(
      response => {
          this.rutas = response;
        console.log(response);
      }
    );
  }

}