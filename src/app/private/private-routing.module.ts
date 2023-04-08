import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ObjectCardComponent } from './components/object-card/object-card.component';
import { ObjectAddonsComponent } from './components/object-addons/object-addons.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'object-card',
    component: ObjectCardComponent
  },
  {
    path: 'object-addons',
    component: ObjectAddonsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }