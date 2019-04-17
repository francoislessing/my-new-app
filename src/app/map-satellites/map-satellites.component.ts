import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

import { latLng, tileLayer, marker, icon, Map, point, polyline, LayerGroup } from 'leaflet';
import { DataStorageService } from '../shared/data-storage.service';
import { SatelliteService } from '../list-satellites/list-satellites.service';
import { Satellite } from '../list-satellites/list-satellites.model';
import { Subscription } from 'rxjs';

 
declare var google: any;
 
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
 
interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}



@Component({
  selector: 'app-map-satellites',
  templateUrl: './map-satellites.component.html',
  styleUrls: ['./map-satellites.component.css']
})
export class MapSatellitesComponent implements OnInit {
  routeItems = [[ 46.78465227596462,-121.74141269177198 ],
  [ 46.80047278292477, -121.73470708541572 ],
  [ 46.815471360459924, -121.72521826811135 ],
  [ 46.8360239546746, -121.7323131300509 ],
  [ 46.844306448474526, -121.73327445052564 ],
  [ 46.84979408048093, -121.74325201660395 ],
  [ 46.853193528950214, -121.74823296256363 ],
  [ 46.85322881676257, -121.74843915738165 ],
  [ 46.85119913890958, -121.7519719619304 ],
  [ 46.85103829018772, -121.7542376741767 ],
  [ 46.85101557523012, -121.75431755371392 ],
  [ 46.85140013694763, -121.75727385096252 ],
  [ 46.8525277543813, -121.75995212048292 ],
  [ 46.85290292836726, -121.76049157977104 ],
  [ 46.8528160918504, -121.76042997278273 ]];

  route = polyline([[ 46.78465227596462,-121.74141269177198 ],
    [ 46.80047278292477, -121.73470708541572 ],
    [ 46.815471360459924, -121.72521826811135 ],
    [ 46.8360239546746, -121.7323131300509 ],
    [ 46.844306448474526, -121.73327445052564 ],
    [ 46.84979408048093, -121.74325201660395 ],
    [ 46.853193528950214, -121.74823296256363 ],
    [ 46.85322881676257, -121.74843915738165 ],
    [ 46.85119913890958, -121.7519719619304 ],
    [ 46.85103829018772, -121.7542376741767 ],
    [ 46.85101557523012, -121.75431755371392 ],
    [ 46.85140013694763, -121.75727385096252 ],
    [ 46.8525277543813, -121.75995212048292 ],
    [ 46.85290292836726, -121.76049157977104 ],
    [ 46.8528160918504, -121.76042997278273 ]]);
  
  
  satelliteList : LayerGroup = new LayerGroup();
  markerList : any[];

  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Marker for the parking lot at the base of Mt. Ranier trails
  paradise = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });  

  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Mt. Rainier Summit': this.summit,
      'Mt. Rainier Paradise Start': this.paradise,
    }
  };  

  options = {
    layers: [
      this.streetMaps,
      this.summit,
      this.paradise,
      this.satelliteList
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

  satellites : Satellite[];
  subscription : Subscription;
  
  geocoder:any;
  public location:Location = {
    lat: 51.678418,
    lng: 7.809007,
    viewport: {
      east: 12,
    north: 23,
    south: 43,
    west: 21
    },
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
    zoom: 5
  };
 
  @ViewChild(AgmMap) map: AgmMap;
  

 

  constructor(private dataStorageService: DataStorageService,
    private satelliteService: SatelliteService,
    public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper) {
      this.mapsApiLoader = mapsApiLoader;
      this.zone = zone;
      this.wrapper = wrapper;
      this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      });    

    let itemI : any;

    for (var i = 0; i < 10; i++) {
      itemI = marker([this.routeItems[i][0],this.routeItems[i][1]], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      console.log(itemI);
      itemI.addTo(this.satelliteList);
      // this.markerList.push(itemI);
    }
    console.log(this.satelliteList);
    
  }

  assignSatellitesToMarkers(satellites:Satellite[]) {
    let itemI : any;
    let lat = 1.0;
    let lng = 1.0;

    this.satelliteList.clearLayers();    

    for (var i = 0; i < satellites.length; i++) {
      lat = satellites[i].lattitude;
      lng = satellites[i].longtitude;

      itemI = marker([lat,lng], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      console.log(itemI);        
      itemI.addTo(this.satelliteList);
      // this.markerList.push(itemI);
    }

  }

  ngOnInit() {
    this.location.marker.draggable = true;
    
      this.subscription = this.satelliteService.satellitesChanged
      .subscribe(
        (satellites: Satellite[]) => {
          this.assignSatellitesToMarkers(satellites);
        }
      );
    this.assignSatellitesToMarkers(this.satelliteService.getSatellites());
    
   
  }
  
  onMapReady(map: Map) {
    map.fitBounds(this.route.getBounds(), {
      padding: point(24, 24),
      maxZoom: 12,
      animate: true
    });
  }
}


