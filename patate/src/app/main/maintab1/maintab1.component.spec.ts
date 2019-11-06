import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Maintab1Component } from './maintab1.component';

describe('Maintab1Component', () => {
  let component: Maintab1Component;
  let fixture: ComponentFixture<Maintab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Maintab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Maintab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
