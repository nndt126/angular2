"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var demo_component_1 = require("./demo.component");
var forms_1 = require("@angular/forms");
var employee_component_1 = require("./employee.component");
var employee_detail_component_1 = require("./employee-detail.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_service_1 = require("./services/employee.service");
var home_component_1 = require("./home.component");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var login_component_1 = require("./login.component");
var login_services_1 = require("./services/login.services");
var check_login_guard_1 = require("./guards/check-login.guard");
var employee_edit_component_1 = require("./employee-edit.component");
var employee_add_component_1 = require("./employee-add.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.appRoutes],
        declarations: [
            app_component_1.AppComponent,
            demo_component_1.DemoComponent,
            home_component_1.HomeComponent,
            employee_component_1.EmployeeListComponent,
            employee_detail_component_1.EmployeeDetailComponent,
            employee_edit_component_1.EmployeeEditComponent,
            employee_add_component_1.EmployeeAddComponent,
            employee_overview_component_1.EmployeeOverViewComponent,
            login_component_1.LoginComponent
        ],
        /* Gắn service vào component = provider */
        providers: [employee_service_1.EmployeeService, login_services_1.LoginService, check_login_guard_1.CheckLoginGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map