import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { CustomPipes } from './custom.pipe';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, DemoComponent, CustomPipes, EmployeeListComponent],
  /* Gắn service vào component = provider */
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
