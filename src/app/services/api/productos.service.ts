import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string ="http://localhost:3000";
  constructor(private http:HttpClient) { }

  getProducts(){
    return  this.http.get(`${this.url}/api`)
  }
}
