import { Component, OnInit, OnDestroy} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Satellite } from '../list-satellites.model';
import { SatelliteService } from '../list-satellites.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-list-all-satellites',
  templateUrl: './list-all-satellites.component.html',
  styleUrls: ['./list-all-satellites.component.css']
})
export class ListAllSatellitesComponent implements OnInit,OnDestroy {
  satellites : Satellite[];
  subscription : Subscription;

  constructor(private dataStorageService: DataStorageService,
              private satelliteService: SatelliteService,
              private router: Router,
              private route: ActivatedRoute) { 

              }

  ngOnInit() {
    this.subscription = this.satelliteService.satellitesChanged
    .subscribe(
      (satellites: Satellite[]) => {
        this.satellites = satellites
      }
    );
  this.satellites = this.satelliteService.getSatellites();

  // this.satellites = [
  //   new Satellite(
  //     'Tasty Schnitzel Satellite',
  //     'A super-tasty constellation',
  //     'Healthy',
  //     '12 12 12',
  //     '13 13 13'),

  //   new Satellite('Big Fat Burger Satellite',
  //   'A super-tasty constellation',
  //   'Healthy',
  //   '120 120 120',
  //   '130 130 130')
  // ];

  }    
  
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  onRefresh() {
    // this.router.navigate(['new'], {relativeTo: this.route});
    this.dataStorageService.getSatellites();
  }

}


