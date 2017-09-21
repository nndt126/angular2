import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';

/** Vì dependency injection nên khai báo Injectable để qua kia tim vào nó hỉu*/
@Injectable()
export class EmployeeService {

    private employeeAPI = "http://597eecfeb507e60011e19247.mockapi.io/api/Employee";
    constructor(private _http: Http) {

    }
    getList(): Observable<any[]> {
        return this._http
        .get(this.employeeAPI)
        .map((response: Response) => response.json());
    }
    // getList(): any[] {
    //     let employees: any[] = [
    //         { Id: 1, Name: "Nguyen Van A" },
    //         { Id: 2, Name: "Tran Van B" },
    //         { Id: 3, Name: "Pham Van C" },
    //     ];
    //     return employees;
    // }
}