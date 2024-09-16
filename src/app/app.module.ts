import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes'; // Verifica que la ruta sea correcta
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router'; // Asegúrate de que RouterModule esté importado aquí

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    OrderManagementComponent,
    ProductDetailsComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule // Asegúrate de que RouterModule esté importado aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
