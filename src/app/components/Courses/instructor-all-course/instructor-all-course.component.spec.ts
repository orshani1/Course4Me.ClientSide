import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAllCourseComponent } from './instructor-all-course.component';

describe('InstructorAllCourseComponent', () => {
  let component: InstructorAllCourseComponent;
  let fixture: ComponentFixture<InstructorAllCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAllCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAllCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
