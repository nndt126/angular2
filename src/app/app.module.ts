import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { CustomPipes } from './custom.pipe';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewComponent } from './employee-overview.component';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    DemoComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeOverViewComponent
  ],
  /* Gắn service vào component = provider */
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
