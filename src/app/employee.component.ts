import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Location } from '@angular/common';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor(
        private employeeService: EmployeeService,
        private location: Location
    ) {/* Khai báo constructor để khai báo khởi tạo */ }
    ngOnInit() {
        this.employeeService.getList().subscribe((response: any) => {
            this.employees = response;
        },
            error => {
                console.log(error);
            });
    }
    goBack(): void {
        this.location.back();
    }
}