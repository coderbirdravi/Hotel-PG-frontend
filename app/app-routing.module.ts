import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path : '',component:FirstpageComponent},
  {path : 'login',component: LoginComponent},
  {path : 'main',component: MainComponent},
  {path : 'booking',component: BookingComponent},
  {path : 'employe', component: EmployeDetailComponent},
  {path : 'customer', component: CustomerComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
