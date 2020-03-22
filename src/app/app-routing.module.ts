import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path: 'master', component: ProjectMasterComponent },
{ path: 'dashboard/:projectId',      component: DashboardComponent },
{ path: '',
    redirectTo: '/master',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
