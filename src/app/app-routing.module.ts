import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},

  //customers path
  {path: 'customers', component: CustomerListComponent},
  {path: 'createCustomer', component: CreateCustomerComponent},
  {path: 'updateCustomer/:customerId', component: UpdateCustomerComponent},

  //product paths
  {path: 'products', component: ProductListComponent},
  {path: 'createProduct', component: CreateProductComponent},
  {path: 'updateProduct/:ProductId', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
