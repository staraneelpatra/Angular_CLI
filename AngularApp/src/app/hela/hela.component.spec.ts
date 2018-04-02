import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelaComponent } from './hela.component';

describe('HelaComponent', () => {
  let component: HelaComponent;
  let fixture: ComponentFixture<HelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
