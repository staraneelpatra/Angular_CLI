import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatcmpntComponent } from './flatcmpnt.component';

describe('FlatcmpntComponent', () => {
  let component: FlatcmpntComponent;
  let fixture: ComponentFixture<FlatcmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatcmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatcmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
