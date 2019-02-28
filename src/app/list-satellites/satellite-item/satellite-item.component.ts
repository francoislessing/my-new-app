import { Component, OnInit, Input } from '@angular/core';

import { Satellite } from '../list-satellites.model';

@Component({
  selector: 'app-satellite-item',
  templateUrl: './satellite-item.component.html',
  styleUrls: ['./satellite-item.component.css']
})
export class SatelliteItemComponent implements OnInit {
  @Input() satellite: Satellite;
  @Input() index: number;

  ngOnInit() {

  }


//  constructor() { }

}