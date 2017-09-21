"use strict";
var router_1 = require("@angular/router");
var employee_component_1 = require("./employee.component");
var home_component_1 = require("./home.component");
var employee_detail_component_1 = require("./employee-detail.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent },
    { path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map