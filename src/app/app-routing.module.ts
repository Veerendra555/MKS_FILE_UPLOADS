import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './components/auth/admin-profile/admin-profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddAdminComponent } from './components/master/admin/add-admin/add-admin.component';
import { ViewAdminComponent } from './components/master/admin/view-admin/view-admin.component';
import { AddMemberComponent } from './components/master/member/add-member/add-member.component';
import { MemberDisplayComponent } from './components/master/member/member-display/member-display.component';
import { AddServiceComponent } from './components/master/services/add-service/add-service.component';
import { ViewServiceComponent } from './components/master/services/view-service/view-service.component';
import { AuthServiceService } from './services/auth-service.service';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'auth/login', component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthServiceService],
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthServiceService],
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthServiceService],
        pathMatch: 'full'
      },
      {
        path: 'add-admins',
        component: AddAdminComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'view-admins',
        component: ViewAdminComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'add-client',
        component: AddMemberComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'edit-client',
        component: AddMemberComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'view-client',
        component: MemberDisplayComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'add-file',
        component: AddServiceComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'edit-file',
        component: AddServiceComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'view-file',
        component: ViewServiceComponent,
        canActivate: [AuthServiceService],
      },
      {
        path: 'admin-profile',
        component:  AdminProfileComponent,
        canActivate: [AuthServiceService],
      },
    ]
  },
  {
    path:'', redirectTo: '/dashboard',pathMatch:'full'
  },
  { path: '**', redirectTo: '/dashboard' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  LayoutComponent,LoginComponent,DashboardComponent,
  AdminProfileComponent,AddMemberComponent,MemberDisplayComponent,
  AddServiceComponent,ViewServiceComponent
]