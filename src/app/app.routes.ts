import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee.component';
import { HomeComponent } from './home.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewComponent } from './employee-overview.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
    { path: 'employee-edit/:id', component: EmployeeEditComponent, canActivate: [CheckLoginGuard] },
    { path: 'employee-add', component: EmployeeAddComponent, canActivate: [CheckLoginGuard] },
    { path: 'login', component: LoginComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, children: [
            { path: 'overview', component: EmployeeOverViewComponent }
        ]
    }
]

export const appRoutes = RouterModule.forRoot(routing);