import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { UserService } from '../../services/user.service';
import { Conductor } from '../models/conductor';
import { ConductorService } from '../services/conductor.service';

@Component({
  selector: 'app-conductor-detalle',
  templateUrl: './conductor-detalle.page.html',
  styleUrls: ['./conductor-detalle.page.scss'],
})
export class ConductorDetallePage implements OnInit {
  @Input() public id;
  public conductor: Conductor;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    //private userService: UserService,
    private conductorService: ConductorService
  ) { }

  ngOnInit() {
    this.getConductor();
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
