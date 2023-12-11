import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = "http://localhost:8080";
  //private createCustomerUrl = "http://localhost:8080/createCustomer";
  //private getCustomerByIdUrl = "http://localhost:8080/getCustomer/{customerId}"
  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]>{
    const url = `${this.baseUrl}/getAllCustomer`;
    return this.httpClient.get<Customer[]>((url));
  }

  createCustomer(customer: Customer): Observable<Object>{
    const url = `${this.baseUrl}/createCustomer`;
    return this.httpClient.post((url), customer);
  }


  // getCustomerById(id: number): Observable<Customer>{
  //   const url = `${this.baseUrl}/getCustomer/${id}`;
  //   return this.httpClient.get<Customer>(url);
  // }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/getCustomer/${id}`);
  }


  updateCustomer(id: number, customer: Customer): Observable<Object>{
    const url = `${this.baseUrl}/updateCustomer/${id}`;
    return this.httpClient.put(url, customer);
  }

  deleteCustomer(id: number): Observable<Object>{
    const url = `${this.baseUrl}/deleteCustomer/${id}`;
    return this.httpClient.delete(url);
  }
}
