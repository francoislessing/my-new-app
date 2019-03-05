import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-satellites', loadChildren : './list-satellites/list-satellites.module#ListSatellitesModule',canActivate:[AuthGuard]},
  { path: 'map-satellites', loadChildren : './map-satellites/map-satellites.module#MapSatellitesModule',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
