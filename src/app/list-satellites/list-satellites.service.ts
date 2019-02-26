import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Satellite } from './list-satellites.model';
//import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class  SatelliteService {  //RecipeService
  recipesChanged = new Subject<Satellite[]>();

  private satellites: Satellite[] = [
    new Satellite(
      'Tasty Schnitzel Satellite',
      'A super-tasty constellation',
      'Healthy',
      '12 12 12',
      '13 13 13'),

    new Satellite('Big Fat Burger Satellite',
    'A super-tasty constellation',
    'Healthy',
    '120 120 120',
    '130 130 130')
  ];

//   constructor(private slService: ShoppingListService) {}

  setRecipes(satellites: Satellite[]) {
    this.satellites = satellites;
    //this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.satellites.slice();
  }

  getRecipe(index: number) {
    return this.satellites[index];
  }

//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }

//   addRecipe(recipe: Recipe) {
//     this.recipes.push(recipe);
//     this.recipesChanged.next(this.recipes.slice());
//   }

//   updateRecipe(index: number, newRecipe: Recipe) {
//     this.recipes[index] = newRecipe;
//     this.recipesChanged.next(this.recipes.slice());
//   }

  deleteRecipe(index: number) {
    this.satellites.splice(index, 1);
    //this.recipesChanged.next(this.recipes.slice());
  }
}
