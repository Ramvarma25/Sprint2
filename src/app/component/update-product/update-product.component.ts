import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  productId: any;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params[`productId`];

    console.log(this.route.snapshot.params[`productId`]);
    this.productService
      .getProductById(this.route.snapshot.params[`customerId`])
      .subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });
  }


  onSubmit() {
    this.productService.updateProduct(this.productId, this.product).subscribe({
      next: (data) => {
        this.goToProductList();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  

  goToProductList(){
    this.router.navigate(['/products']);
  }
}
