import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OCreateComponent } from './o-create.component';

describe('OCreateComponent', () => {
  let component: OCreateComponent;
  let fixture: ComponentFixture<OCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
