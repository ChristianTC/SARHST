import {Component, Input, OnInit} from '@angular/core';
import { Conductor } from 'src/app/models/conductor';
import { Ruta } from 'src/app/models/ruta';
import { ConductorService } from 'src/app/services/conductor.service';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { RutaService } from '../services/ruta.service';
import {ConductorDetallePage} from '../conductor-detalle/conductor-detalle.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  conductores: Conductor;
  conductor: Conductor;
  rutas: Ruta;
  @Input() public id;

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
  //conductorDetalle(id: number) {
  //  const modalRef = this.modalService.open(ConductorDetallePage, {centered: true});
  //  modalRef.componentInstance.id = id;
  //}
}