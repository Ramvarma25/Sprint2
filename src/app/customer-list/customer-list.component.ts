import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router){
    
  }

  ngOnInit(): void{
      this.getCustomer();

    // this.customers = [

    //   {
    //     "id" : 1,
    //     "customerName" : "Ram",
    //     "address": "Kalyan",
    //     "emailId":"Ram9870@gmail.com",
    //     "phoneNum":"998238452"
    //   },
    //   {
    //     "id" : 2,
    //     "customerName" : "Kishan",
    //     "address": "Titwala",
    //     "emailId":"abc0@gmail.com",
    //     "phoneNum":"746681357"
    //   }
    // ]

  }

  private getCustomer(){
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(id: number){
    this.router.navigate(['updateCustomer', id]);
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustomer();
    })
  }
}
