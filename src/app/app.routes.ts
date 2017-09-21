import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee.component';
import { HomeComponent } from './home.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent }
]

export const appRoutes = RouterModule.forRoot(routing);