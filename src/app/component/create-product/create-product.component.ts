import { Component, OnInit } from '@angular/core';
import { Product } from '../../product'; 
import { ProductService } from '../../product.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  ngOnInit(): void {
    
   }
 
   product: Product = new Product();
 
   constructor(private productService: ProductService, private router: Router){
 
   }
 
   saveProduct() {
     this.productService.createProduct(this.product).subscribe({
       next: data => {
         console.log(data);
       },
       error: error => console.log(error),
     });
   }
   
 
   goToProductList(){
     this.router.navigate(['/products']);
   }
 
   onSubmit(){
     console.log(this.product);
     this.saveProduct();
     this.goToProductList();
   }

}
