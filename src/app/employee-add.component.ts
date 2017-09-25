import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-add-component',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
    public employee: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeeService: EmployeeService
    ) { }
    ngOnInit() {
        this.employee = {};
    }
    SaveForm() {
        this.employeeService.AddEmployee(this.employee).subscribe(response => {
            if (response) {
                alert('Add success');
                this.router.navigate(['/employees']);
            }
        })
    }
    goToEmployee(): void {
        this.router.navigate(['employees']);
    }

}