"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/skip");
require("rxjs/add/operator/take");
/** Vì dependency injection nên khai báo Injectable để qua kia tim vào nó hỉu*/
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.employeeAPI = "http://597eecfeb507e60011e19247.mockapi.io/api/Employee";
    }
    EmployeeService.prototype.getList = function () {
        return this._http
            .get(this.employeeAPI)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        return this._http
            .get(this.employeeAPI + '/' + id)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.UpdateEmployee = function (id, data) {
        return this._http
            .put(this.employeeAPI + '/' + id, data)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.AddEmployee = function (data) {
        return this._http
            .post(this.employeeAPI, data)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.DeleteEmployee = function (id) {
        return this._http
            .delete(this.employeeAPI + '/' + id)
            .map(function (response) { return response.json(); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map