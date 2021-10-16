import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodGridComponent } from './pod-grid.component';

describe('PodGridComponent', () => {
  let component: PodGridComponent;
  let fixture: ComponentFixture<PodGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
