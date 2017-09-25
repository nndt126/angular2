"use strict";
var router_1 = require("@angular/router");
var employee_component_1 = require("./employee.component");
var home_component_1 = require("./home.component");
var employee_detail_component_1 = require("./employee-detail.component");
var employee_overview_component_1 = require("./employee-overview.component");
var login_component_1 = require("./login.component");
var check_login_guard_1 = require("./guards/check-login.guard");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent, canActivate: [check_login_guard_1.CheckLoginGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent, children: [
            { path: 'overview', component: employee_overview_component_1.EmployeeOverViewComponent }
        ]
    }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map