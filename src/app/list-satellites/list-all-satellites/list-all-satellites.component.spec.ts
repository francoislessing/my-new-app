import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSatellitesComponent } from './list-all-satellites.component';

describe('ListAllSatellitesComponent', () => {
  let component: ListAllSatellitesComponent;
  let fixture: ComponentFixture<ListAllSatellitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllSatellitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
