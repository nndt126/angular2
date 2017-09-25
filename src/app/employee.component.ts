import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public keyWord: string;
    constructor(
        private employeeService: EmployeeService,
        private location: Location,
        private router: Router
    ) {/* Khai báo constructor để khai báo khởi tạo */ }
    ngOnInit() {
        this.GetData();
    }
    goBack(): void {
        this.location.back();
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure to delete Employee?");
        if (confirmResult) {
            this.employeeService.DeleteEmployee(id).subscribe(response => {
                if (response) {
                    alert('Delete successfull');
                    this.GetData();
                }
            })
        }
    }
    GetData() {
        this.employeeService.getList().subscribe((response: any) => {
            this.employees = response;
        },
            error => {
                console.log(error);
            });
    }
    Search() {
        this.employeeService.search(this.keyWord).subscribe((response: any) => {
            this.employees = response;
        },
            error => {
                console.log(error);
            });
    }
    // goToDetail(): void {
    //     this.router.navigate['/employee-detail',this.selec]
    // }
}