import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRocketComponent } from './app-rocket/app-rocket.component';
import { RocketFormComponent } from './rocket-form/rocket-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rocket', component: AppRocketComponent },
  { path: 'form', component: RocketFormComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
