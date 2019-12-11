import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrrrComponent } from './borrrr.component';

describe('BorrrrComponent', () => {
  let component: BorrrrComponent;
  let fixture: ComponentFixture<BorrrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
