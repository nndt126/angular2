import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.services';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  dateNow: Date = new Date();

  // public cities = [
  //   {Id : 1, Name : 'HaNoi'},
  //   {Id : 2, Name : 'TpHCM'},
  // ];
  // onSubmit(value: any) {
  //   console.log(value);
  // }
  public isLogin: boolean;
  constructor(private loginService: LoginService, private location: Location) {

  }
  ngOnInit() {
    this.isLogin = this.loginService.IsLogged();
  }
  logOut() {
    this.loginService.SetLogin(false);
    this.location.back();
  }
}
