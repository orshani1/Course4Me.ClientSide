import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './app/components/Courses/all-courses/all-courses.component';
import { AddCourseComponent } from './app/components/Courses/add-course/add-course.component';
import { HomePageComponent } from './app/components/Home/home-page/home-page.component';
import { MyPurchasedCoursesComponent } from './app/components/Courses/my-purchased-courses/my-purchased-courses.component';
import { InstructorAllCourseComponent } from './app/components/Courses/instructor-all-course/instructor-all-course.component';
import { CourseDetailsComponent } from './app/components/Courses/course-details/course-details.component';
import { AddEpisodeFormComponent } from './app/components/Courses/add-episode-form/add-episode-form.component';
import { EditCourseComponent } from './app/components/Courses/edit-course/edit-course.component';
import { RegisterComponent } from './app/components/register/register.component';

const routes: Routes = [
  {path:'all-courses',component:AllCoursesComponent},
  
 {path:'instructor-all-courses',component:InstructorAllCourseComponent},
 {path:'my-learnings',component:MyPurchasedCoursesComponent},
 {path:"register",component:RegisterComponent},
 {path:'home',component:HomePageComponent},
 {path:"add-course",component:AddCourseComponent},
 {path:"course-detail/:id",component:CourseDetailsComponent},
 {path:"add-episode/:id",component:AddEpisodeFormComponent},
 {path:"edit-course/:id",component:EditCourseComponent},
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
