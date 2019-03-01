import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ListSatellitesComponent } from './list-satellites/list-satellites.component'; // static module import
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-satellites', loadChildren : './list-satellites/list-satellites.module#ListSatellitesModule'},
  { path: 'map-satellites', loadChildren : './map-satellites/map-satellites.module#MapSatellitesModule'},

  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent }
  // ,{ path: 'list-satellites', component: ListSatellitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
