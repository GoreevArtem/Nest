import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ObjectCardComponent } from './components/object-card/object-card.component';
import { ObjectAddonsComponent } from './components/object-addons/object-addons.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ObjectCardComponent,
    ObjectAddonsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
