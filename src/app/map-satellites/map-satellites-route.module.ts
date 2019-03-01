import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { MapSatellitesComponent } from './map-satellites.component';



const mapSatellitesRoutes: Routes = [
  {path : '', component : MapSatellitesComponent   
  }

];
   
@NgModule({
  imports: [
    RouterModule.forChild(mapSatellitesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class MapSatellitesRoutingModule {}
