import {NgModule} from '@angular/core'
import { MapSatellitesComponent } from './map-satellites.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { MapSatellitesRoutingModule } from './map-satellites-route.module';
//import { MapSatellitesComponent } from './map-satellites.component';


@NgModule({
    declarations: [
        MapSatellitesComponent
    ],

    imports: [
        LeafletModule,
        MapSatellitesRoutingModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyDensU1AtR9H6YMKnHRfR0od8FXeX14w1I'}), // <---        
        NgbModule.forRoot() // <---
    ],
    providers: [
        GoogleMapsAPIWrapper // <---
    ]
}
)
export class MapSatellitesModule {
}