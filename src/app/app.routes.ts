import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './components/layout/layout.component'; 
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'products', component: ProductListComponent },
      { path: 'orders', component: OrderListComponent },
      { path: 'createOrder', component: OrderManagementComponent },
      { path: 'products/:id', component: ProductDetailsComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
