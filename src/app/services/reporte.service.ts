import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import {GLOBAL} from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  isLoggedIn = false;
  //token:any;
  public token;
  public url: String;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { 
    this.url = GLOBAL.url;
  }


  reportar(
    conductor_id: String
    ) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access_token'));

      console.log("serv")
      console.log(conductor_id)
    return this.http.post(this.url + 'Conductor/' + conductor_id + '/Reportar',
      {
        conductor_id: conductor_id
      }, { headers: headers }
    )
  }


  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
