import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PophoverPage } from './pophover.page';

describe('PophoverPage', () => {
  let component: PophoverPage;
  let fixture: ComponentFixture<PophoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PophoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PophoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
