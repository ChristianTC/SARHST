import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { Carousel } from '../models/carousel';
import {GLOBAL} from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
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

  getCarousels() {
    const headers = new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('token'));

    /*const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });*/
    return this.http.get<Carousel>(this.url + 'rest/carousel/', { headers: headers })
    .pipe(
      tap(carousels => {
        //console.log(news);
        //console.log(news["results"]);
        return carousels;
      })
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
