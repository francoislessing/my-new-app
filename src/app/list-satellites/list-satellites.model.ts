import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

export class Satellite {
  public displayName: string;
  public constellation: string;
  public healthIndicator: string;
  public lattitude: string;
  public longtitude: string;

  constructor(displayName: string,constellation: string,healthIndicator: string,lattitude: string,longtitude: string) {
    this.displayName = displayName;
    this.constellation = constellation;
    this.healthIndicator = healthIndicator;
    this.lattitude = lattitude;
    this.longtitude = longtitude;
    }
}
