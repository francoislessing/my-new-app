import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { SatellitesRoutingModule } from './list-satellites-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListAllSatellitesComponent } from './list-all-satellites/list-all-satellites.component';
import { SatelliteItemComponent } from './satellite-item/satellite-item.component';

@NgModule({
  declarations: [
    
  ListAllSatellitesComponent,    
  SatelliteItemComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SatellitesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
