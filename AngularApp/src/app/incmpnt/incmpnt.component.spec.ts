import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncmpntComponent } from './incmpnt.component';

describe('IncmpntComponent', () => {
  let component: IncmpntComponent;
  let fixture: ComponentFixture<IncmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
