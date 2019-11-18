import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorDetallePage } from './conductor-detalle.page';

describe('ConductorDetallePage', () => {
  let component: ConductorDetallePage;
  let fixture: ComponentFixture<ConductorDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
