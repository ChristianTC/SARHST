import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { UserService } from '../../services/user.service';
import { Conductor } from '../models/conductor';
import { ConductorService } from '../services/conductor.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conductor-detalle',
  templateUrl: './conductor-detalle.page.html',
  styleUrls: ['./conductor-detalle.page.scss'],
})
export class ConductorDetallePage implements OnInit {
  public conductor: Conductor;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    //private userService: UserService,
    private modalCtrl: ModalController,
    private conductorService: ConductorService
  ) { }

    @Input() id;
    @Input() pais;

  ngOnInit() {
    this.getConductor();
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  getConductor() {
    this.conductorService.getConductor(this.id).subscribe(
      response => {
        this.conductor = response;
        console.log(response);
      }
    );
  }

}
