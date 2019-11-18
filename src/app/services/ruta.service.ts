import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { New } from '../models/new';
import {GLOBAL} from '../services/global';
import { Conductor } from '../models/conductor';
import { Ruta } from '../models/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
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

  postNew(
    title: string,
    content: string
    
    ) {
    return this.http.post(this.url + 'rest/news/',
      {
        title: title, 
        content: content, 
      }
    )
  }

  getRutas() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access_token'));

    /*const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });*/
    return this.http.get<Ruta>(this.url + 'Ruta', { headers: headers })
    .pipe(
      tap(rutas => {
        //console.log(news);
        //console.log(news["results"]);
        return rutas;
      })
    )
  }
  getToken() {
    return this.storage.getItem('access_token').then(
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