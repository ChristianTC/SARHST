import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://192.168.1.102:8000/';
  
  constructor() { }
}