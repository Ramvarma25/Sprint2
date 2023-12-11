import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product'; 
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    const url = `${this.baseUrl}/getAllProduct`;
    return this.httpClient.get<Product[]>((url));
  }

  createProduct(product: Product): Observable<Object>{
    const url = `${this.baseUrl}/createProduct`;
    return this.httpClient.post((url), product);
  }


  getProductById(id: number): Observable<Product>{
    const url = `${this.baseUrl}/getProduct/${id}`;
    return this.httpClient.get<Product>(url);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    const url = `${this.baseUrl}/updateProduct/${id}`;
    return this.httpClient.put(url, product);
  }

  deleteProduct(id: number): Observable<Object>{
    const url = `${this.baseUrl}/deleteProduct/${id}`;
    return this.httpClient.delete(url);
  }
}
