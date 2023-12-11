import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent implements OnInit {

customerName: any;
emailId: any;
address: any;
phoneNum: any;
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router){

  }

  // saveCustomer(){
  //   this.customerService.createCustomer(this.customer).subscribe(data =>{
  //     console.log(data);
  //     this.goToCustomerList();
  //   },
  //   error => console.log(error));
  // }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => console.log(error),
    });
  }
  

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
    this.goToCustomerList();
  }
}
