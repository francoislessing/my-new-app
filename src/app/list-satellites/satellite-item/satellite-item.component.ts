import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../list-satellites.model';

@Component({
  selector: 'app-satellite-item',
  templateUrl: './satellite-item.component.html',
  styleUrls: ['./satellite-item.component.css']
})
export class SatelliteItemComponent implements OnInit {

//  constructor() { }
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {

  }

}