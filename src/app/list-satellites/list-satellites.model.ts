import { Ingredient } from '../shared/ingredient.model';

// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;
//   public ingredients: Ingredient[];

//   constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//     this.ingredients = ingredients;
//   }
// }

export class OrbitType {
  public a0: number;
  public a1: number;
  public deltaInclination: number;
  public eccentricity: number;
  public gpsSeconds: number;
  public gpsWeek: number;
  public healthCode: number;
  public isHealthy: boolean;
  public m0: number;
  public omega: number;
  public omega0: number;
  public omegaDot: number;
  public rootOfSemiMajorAxis: number;
  public satId: number;

  // constructor();
}
export class TraceType {
  public height: number;
  public latitude: number;
  public longitude: number;

  // constructor()
}

export class PathType {
  public asAt: string;
  public trace : TraceType

  //constructor()
}

export class SatelliteReceived {
  public constellation: string;
  public displayName: string;
  public id: number;
  public orbit: OrbitType;
  public path:  PathType[];
  public prn: number;

  //constructor()
}

export class Satellite {
  public displayName: string;
  public constellation: string;
  public healthIndicator: boolean;
  public lattitude: number;
  public longtitude: number;

  constructor(displayName: string,
            constellation: string,
            healthIndicator: boolean,
            lattitude: number,
            longtitude: number) {
    this.displayName = displayName;
    this.constellation = constellation;
    this.healthIndicator = healthIndicator;
    this.lattitude = lattitude;
    this.longtitude = longtitude;
    }
}
