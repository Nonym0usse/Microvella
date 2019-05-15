import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepannageComponent } from './depannage.component';

describe('DepannageComponent', () => {
  let component: DepannageComponent;
  let fixture: ComponentFixture<DepannageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepannageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepannageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
