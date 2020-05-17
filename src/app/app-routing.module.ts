import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRocketComponent } from './components/app-rocket/app-rocket.component';
import { RocketFormComponent } from './components/rocket-form/rocket-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rocket', component: AppRocketComponent, canActivate: [AuthGuard] },
  { path: 'form', component: RocketFormComponent,  canActivate: [AuthGuard] },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
