import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchasedCoursesComponent } from './my-purchased-courses.component';

describe('MyPurchasedCoursesComponent', () => {
  let component: MyPurchasedCoursesComponent;
  let fixture: ComponentFixture<MyPurchasedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPurchasedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchasedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
