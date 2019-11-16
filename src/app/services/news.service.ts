import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { New } from '../models/new';
import {GLOBAL} from '../services/global';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
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

  getNews() {
    const headers = new HttpHeaders().set('Authorization', 'Token '+localStorage.getItem('token'));

    /*const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });*/
    return this.http.get<New>(this.url + 'rest/news/', { headers: headers })
    .pipe(
      tap(news => {
        //console.log(news);
        //console.log(news["results"]);
        return news;
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