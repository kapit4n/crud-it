import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OUpdateComponent } from './o-update.component';

describe('OUpdateComponent', () => {
  let component: OUpdateComponent;
  let fixture: ComponentFixture<OUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
