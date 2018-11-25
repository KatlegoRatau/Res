import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricComponent } from './matric.component';

describe('MatricComponent', () => {
  let component: MatricComponent;
  let fixture: ComponentFixture<MatricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
