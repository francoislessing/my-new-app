import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { SatelliteReceived } from '../list-satellites/list-satellites.model'
import { AuthService } from '../auth/auth.service';
import { SatelliteService } from '../list-satellites/list-satellites.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private satelliteService: SatelliteService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  getSatellites() {
    
 
    this.http.get('https://gnssplanningbeta.azurewebsites.net/api/SatelliteLocations/') 
      .map(
        (response: Response) => {
          // Check what happens here
          const satellites: SatelliteReceived[] = response.json();
          console.log(satellites);
          // for (let sat of satellites) {
           
          // }
          return satellites;
        }
      )
      .subscribe(
        (satellites: SatelliteReceived[]) => {
          this.satelliteService.setSatellites(satellites);
        }
      );
  }

}
