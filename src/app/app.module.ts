import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewComponent } from './employee-overview.component';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import {LoginComponent} from './login.component';
import { LoginService } from './services/login.services';
import {CheckLoginGuard} from './guards/check-login.guard';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    DemoComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeOverViewComponent,
    LoginComponent
  ],
  /* Gắn service vào component = provider */
  providers: [EmployeeService, LoginService,CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
