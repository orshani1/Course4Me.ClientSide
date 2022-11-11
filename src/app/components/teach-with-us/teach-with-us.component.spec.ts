import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachWithUsComponent } from './teach-with-us.component';

describe('TeachWithUsComponent', () => {
  let component: TeachWithUsComponent;
  let fixture: ComponentFixture<TeachWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
