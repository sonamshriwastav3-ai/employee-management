import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeedashboardComponent } from './pages/employeedashboard/employeedashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { AttendaceComponent } from './pages/attendace/attendace.component';

export const routes: Routes = [
  // ✅ Default route → Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'employee-dashboard',
    component: EmployeedashboardComponent,
  },

  {
    path: 'departments',
    component: DepartmentsComponent,
  },

  {
    path: 'employee',
    component: EmployeeComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'leaves',
    component: LeavesComponent,
  },

  {
    path: 'attendace',
    component: AttendaceComponent,
  },
  {
    path: 'attendace/:id',
    component: AttendaceComponent,
  },

  // ✅ Safety fallback
  {
    path: '**',
    redirectTo: 'login',
  },
];

