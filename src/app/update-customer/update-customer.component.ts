import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  //customerId : number = 0;
  customerId: any;
  customer: Customer = new Customer();


  
  constructor(private customerService: CustomerService,
     private route: ActivatedRoute, 
     private router: Router){ }

    // updateCustomer = new FormGroup({
    //   customerName: new FormControl(''),
    //   address: new FormControl(''),
    //   emailId: new FormControl(''),
    //   phoneNum: new FormControl(''),
    // })

     
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];
  //   this.customerService.getCustomerById(this.id).subscribe(data =>{
  //     this.customer = data;
  //   }, error => console.log(error));
  //  // throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {

    this.customerId = this.route.snapshot.params[`customerId`]; // original
    //this.customerId = this.route.snapshot.paramMap.get(`customerId`); // updated
    console.log(this.route.snapshot.params[`customerId`]); // updated optinal for debug

    //this.customerService.getCustomerById(this.customerId).subscribe({  original
      this.customerService.getCustomerById(this.route.snapshot.params[`customerId`]).subscribe({
      next: (data) => {
        this.customer = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // Optional: code to run when the observable is completed
      }
    });

   
    // this.customerId = +this.route.snapshot.paramMap.get(`customerId`);
    // this.loadCustomer();
    
  }
  
  // loadCustomer() {
  //   this.customerService.getCustomerById(this.customerId).subscribe(
  //     (data: Customer) => {
  //       this.customer = data;
  //     },
  //     error => {
  //       console.error('Error loading customer: ', error);
  //     }
  //   );
  // }


  // onSubmit(){
  //   this.customerService.updateCustomer(this.id, this.customer).subscribe( data =>{
  //     this.goToCustomerList();
  //   },
  //   error => console.log(error));
  // }

  onSubmit() {
    this.customerService.updateCustomer(this.customerId, this.customer).subscribe({
      next: (data) => {
        this.goToCustomerList();
      },
      error: (error) => {
        console.log(error);
      }
      // Optionally, you can include the 'complete' callback if needed
    });
  }
  

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }
}
