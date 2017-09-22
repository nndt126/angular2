import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee.component';
import { HomeComponent } from './home.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewComponent } from './employee-overview.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, children: [
            { path: 'overview', component: EmployeeOverViewComponent }
        ]
    }
]

export const appRoutes = RouterModule.forRoot(routing);