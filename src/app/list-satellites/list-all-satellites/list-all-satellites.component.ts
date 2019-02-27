import { Component, OnInit, OnDestroy} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Satellite } from '../list-satellites.model';
import { SatelliteService } from '../list-satellites.service';

@Component({
  selector: 'app-list-all-satellites',
  templateUrl: './list-all-satellites.component.html',
  styleUrls: ['./list-all-satellites.component.css']
})
export class ListAllSatellitesComponent implements OnInit,OnDestroy {
  satellites : Satellite[];
  subscription : Subscription;

  constructor(private satelliteService: SatelliteService,
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
  }    
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRefresh() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}


