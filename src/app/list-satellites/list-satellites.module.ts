import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { SatellitesRoutingModule } from './list-satellites-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListAllSatellitesComponent } from './list-all-satellites/list-all-satellites.component';

@NgModule({
  declarations: [
    
  ListAllSatellitesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SatellitesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
