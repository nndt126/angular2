import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-component',
    template: `<h1>This is home</h1>
    <button (click)= "goToEmployee()"> Go to Employee</button>`
})

export class HomeComponent {

    constructor(private router: Router) { }

    goToEmployee(): void {
        this.router.navigate(['employees']);
    }
}