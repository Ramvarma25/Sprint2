import { Component, OnInit } from '@angular/core';
import { Product } from '../../product'; 
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router){
    
  }

  ngOnInit(): void{
      this.getProduct();
    }

    private getProduct(){
      this.productService.getProductList().subscribe(data => {
        this.products = data;
      });
    }
  
    updateProduct(id: number){
      this.router.navigate(['updateProduct', id]);
    }
  
    deleteProduct(id: number){
      this.productService.deleteProduct(id).subscribe(data => {
        console.log(data);
        this.getProduct();
      })
    }

}
