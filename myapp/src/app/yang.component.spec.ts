import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YangComponent } from './yang.component';

describe('YangComponent', () => {
  let component: YangComponent;
  let fixture: ComponentFixture<YangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
