import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerSortComponent } from './trigger-sort.component';

describe('TriggerSortComponent', () => {
  let component: TriggerSortComponent;
  let fixture: ComponentFixture<TriggerSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
