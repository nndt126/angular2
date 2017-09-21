import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service'
import { Subscription } from 'rxjs';

@Component({
    selector: 'employee-detail-component',
    templateUrl: './employee-detail.component.html',
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService
    ) { }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });

        this.employeeService.getEmployeeById(this._id).subscribe((data) => {
            this.employee = data;
        }, error => {
            console.log(error);
        });

    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}