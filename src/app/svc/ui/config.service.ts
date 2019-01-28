import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';

  baseUrl = "http://localhost:3000/api";
  
  productsUrl = "products";

  constructor() { }
}
