import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { FirstpageComponent } from './firstpage/firstpage.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BookingComponent,
    EmployeDetailComponent,
    CustomerComponent,
    FirstpageComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
