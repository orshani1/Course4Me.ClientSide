import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './app/components/Home/nav-bar/nav-bar.component';
import { AllCoursesComponent } from './app/components/Courses/all-courses/all-courses.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StartLearningComponent } from './app/components/start-learning/start-learning.component';
import { WhatNextComponent } from './app/components/what-next/what-next.component';
import { TeachWithUsComponent } from './app/components/teach-with-us/teach-with-us.component';
import { HomePageComponent } from './app/components/Home/home-page/home-page.component';
import { ShowcaseComponent } from './app/components/Home/showcase/showcase.component';
import { AddCourseComponent } from './app/components/Courses/add-course/add-course.component';
import { InstructorAllCourseComponent } from './app/components/Courses/instructor-all-course/instructor-all-course.component';
import { LoginComponent } from './app/components/login/login.component';
import { MyPurchasedCoursesComponent } from './app/components/Courses/my-purchased-courses/my-purchased-courses.component';
import { CourseDetailsComponent } from './app/components/Courses/course-details/course-details.component';
import { AddEpisodeFormComponent } from './app/components/Courses/add-episode-form/add-episode-form.component';
import { WatchEpisodeComponent } from './app/components/Courses/watch-episode/watch-episode.component';
import { EditCourseComponent } from './app/components/Courses/edit-course/edit-course.component';
import { RegisterComponent } from './app/components/register/register.component';
import { FooterComponent } from './app/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllCoursesComponent,
    StartLearningComponent,
    WhatNextComponent,
    TeachWithUsComponent,
    HomePageComponent,
    ShowcaseComponent,
    AddCourseComponent,
    InstructorAllCourseComponent,
    LoginComponent,
    MyPurchasedCoursesComponent,
    CourseDetailsComponent,
    AddEpisodeFormComponent,
    WatchEpisodeComponent,
    EditCourseComponent,
    RegisterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
