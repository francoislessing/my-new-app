import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


import { SatelliteReceived } from '../list-satellites/list-satellites.model'
import { AuthService } from '../auth/auth.service';
import { SatelliteService } from '../list-satellites/list-satellites.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,              
              private satelliteService: SatelliteService,
              private authService: AuthService) {
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
