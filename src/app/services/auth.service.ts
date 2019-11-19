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
export class AuthService {
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
  login(email: String, password: String) {
    return this.http.post(this.url+'auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => { 
        console.log(token);
        console.log(token['access_token']);
        
        localStorage.setItem('access_token', token['access_token'])
        
        /*this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );*/
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  register(
    first_name: String, 
    last_name: String, 
    dni: number, 
    email: String, 
    password: String,
    gender: String,
    city: String,
    birthDate: String
    
    ) {
    return this.http.post(this.url + 'register/',
      {
        firstName: first_name, 
        lastName: last_name, 
        dni: dni, 
        email: email, 
        password: password,
        //gender: gender,
        city: city,
        birthDate: birthDate
      }
    )
  }

  
  logout() {
    const headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token'));
    const json = '';
    return this.http.post(this.url + 'auth/logout',json, { headers: headers })
    .pipe(
      tap(data => {
        console.log(data);
        //this.storage.remove("token");
        localStorage.clear();
        this.isLoggedIn = false;
        //delete this.token;
        return data;
      })
    );
  }

  user() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access_token'));

    /*const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });*/
    return this.http.get<User>(this.url + 'auth/user', { headers: headers })
    .pipe(
      tap(user => {
        console.log(user);
        return user;
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