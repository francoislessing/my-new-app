import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { ListAllSatellitesComponent } from './list-all-satellites/list-all-satellites.component';
import { ListSatellitesComponent } from './list-satellites.component';

// import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
// import { RecipeStartComponent } from './recipe-start/recipe-start.component';
// import { RecipesComponent } from './recipes.component';

const satellitesRoutes: Routes = [
  {path : '', component : ListSatellitesComponent
  , children: [
    { path: '', component: ListAllSatellitesComponent }  
  ]  
  }
//   { path: '', component: RecipesComponent, children: [
//     { path: '', component: RecipeStartComponent },
//     { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
//     { path: ':id', component: RecipeDetailComponent },
//     { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
//   ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(satellitesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class SatellitesRoutingModule {}
