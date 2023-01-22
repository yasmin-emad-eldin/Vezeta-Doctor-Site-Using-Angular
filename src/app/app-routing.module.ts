import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TestComponent } from './component/testt/test/test.component';
import { PaypalComponent } from './component/paypal/paypal/paypal.component';
import { Addadmin2Component } from './component/admin/testaddAdmin/addadmin2/addadmin2.component';
import { DoctorprofileComponent } from './component/doctorprofile/doctorprofile/doctorprofile.component';
import { TsComponent } from './component/ts/ts/ts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'log-out', component: LoginComponent },
 
  { path: '', component:TestComponent},
  { path: 'paytestpal', component:PaypalComponent},
  { path: 'AddAdmin', component:Addadmin2Component},
  { path: 'ts', component:TsComponent},

  { path:'Doctorprofile',component:DoctorprofileComponent
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
