import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.services';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.css'],
})

export class LoginComponent {

    constructor(private router: Router, private loginService: LoginService) {

    }

    CheckLogin(value: any) {
        console.log(value);
        if (value.username === 'admin' && value.password === '123') {
            this.loginService.SetLogin(true);
            this.router.navigate(['/']);
        }


    }
}