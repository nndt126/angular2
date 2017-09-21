import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor(private employeeService: EmployeeService) {
        /* Khai báo constructor để khai báo khởi tạo */
    }
    ngOnInit() {
        this.employeeService.getList().subscribe((response: any) => {
            this.employees = response;
        },
            error => {
                console.log(error);
            });
    }
}