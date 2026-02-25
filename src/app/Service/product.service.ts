import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data/product.module.ts/product.module.ts-module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService {
  constructor(private http:HttpClient)
  {

  }

  getAllProducts():Observable<Product []>
  {
    return this.http.get<any []>('assets/product.json');
  }
}
