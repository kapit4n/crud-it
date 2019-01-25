import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OInfoComponent } from './o-info.component';

describe('OInfoComponent', () => {
  let component: OInfoComponent;
  let fixture: ComponentFixture<OInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
