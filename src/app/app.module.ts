import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './component/testt/test/test.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Addadmin2Component } from './component/admin/testaddAdmin/addadmin2/addadmin2.component';
import { DoctorprofileComponent } from './component/doctorprofile/doctorprofile/doctorprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule}from '@angular/material/paginator';
import { TsComponent } from './component/ts/ts/ts.component'

// mat-paginator
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    TestComponent,
    Addadmin2Component,
    DoctorprofileComponent,
    TsComponent,
  ],
  imports: [FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
