import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer ,SafeUrl} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-instructor-all-course',
  templateUrl: './instructor-all-course.component.html',
  styleUrls: ['./instructor-all-course.component.css'],
})
export class InstructorAllCourseComponent implements OnInit {
  isData: boolean = false;
  courseCount: number = 0;
  pixelCount: number = 0;
  filterKey: string;
  coursesOriginalCSSLeft: any;
  languageMap = {
    english: 0,
    hebrew: 1,
    spanish: 2,
  };
  instructorCourses: any = [];
  instructorId: any;
  noCourse: boolean = false;
  @ViewChild('courses') coursesHtmlElement: ElementRef;

  constructor(
    private _http: HttpService,
    @Inject(DOCUMENT) private _document: Document, private sanitizer:DomSanitizer,private _router:Router
  ) {
    
    
  }
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.instructorId = localStorage.getItem("userId");
  this.callHttp();
  

 }
 ngAfterViewChecked(): void {
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  this.handleCount();
  this.adjustBooleans();
 }
  showNext() {

    this._document.getElementById('courses')?.style.right;
    this.coursesHtmlElement.nativeElement.style.position = 'fixed';
    this.coursesHtmlElement.nativeElement.style.right = `${this.pixelCount}px`;
    this.pixelCount += 150;
    this.coursesHtmlElement.nativeElement.style.position = 'relative';
  }
  goBack() {
    /// need to do thisS
    this.coursesHtmlElement.nativeElement.style.right = `${this.pixelCount}px`;
    this.pixelCount -= 150;
  }


  adjustBooleans() {
    if(this.instructorCourses.length > 0){
      this.isData = true;
    }
    else{
   
      
      this.isData = false;
    }
  }
  callHttp() {
    this._http.getMyInstructorCourses(this.instructorId).subscribe((result) => {
     
      this.getImages(result);
      this.giveCategory(result);
      this.giveLanguage(result);
     
      
      this.instructorCourses = result;
    });

  }
  handleClick(id:number){
    this._router.navigateByUrl(`course-detail/${id}`);
  }

  handleCount() {
    for (let i in this.instructorCourses) {
      this.courseCount++;
    }
  }
  giveLanguage(courses: any) {
    console.log('courses entering give lang func', courses);

    for (let i of courses) {
      if (i.langauge == this.languageMap.english) {
        i.tempLanguage = 'English';
      } else if (i.langauge == this.languageMap.hebrew) {
        i.tempLanguage = 'Hebrew';
      } else {
        i.tempLanguage = 'Spanish';
      }
    }
  }
  giveCategory(courses: any) {
    for (let i of courses) {
      if (i.category == 0) {
        i.tempCategory = 'Development';
      } else if (i.category == 1) {
        i.tempCategory = 'Design';
      } else if (i.category == 2) {
        i.tempCategory = 'Marketing';
      } else if (i.category == 3) {
        i.tempCategory = 'Life Style';
      } else if (i.category == 4) {
        i.tempCategory = 'Health And Fitness';
      } else {
        i.tempCategory = 'Music';
      }
    }
  }
  handleFilter(action: any) {
   let comparer = this.filterKey === 'name' ? this.compareName : this.filterKey === 'price' ? this.comparePrice : this.filterKey === 'category' ? this.compareCategory : this.filterKey === 'students' ? this.compareStudents : this.compareRating;
   this.instructorCourses.sort(comparer);
   action !== 'asc' ? this.instructorCourses.reverse(): '';
  }
  compareName(a: any, b: any) {
    if (a.courseName < b.courseName) {
      return -1;
    }
    if (a.courseName > b.courseName) {
      return 1;
    }
    return 0;
  }
  comparePrice(a: any, b: any) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;

  }
  compareCategory(a: any, b: any) {
    if (a.tempCategory < b.tempCategory) {
      return -1;
    }
    if (a.tempCategory > b.tempCategory) {
      return 1;
    }
    return 0;
  }
  compareStudents(a:any,b:any){
    if(a.numOfStudents < b.numOfStudents){
      return 1;
    }
    if(a.numOfStudents > b.numOfStudents){
      return -1;
    }
    return 0;
  }
  compareRating(a:any,b:any){
    if(a.rating < b.rating){
      return 1;
    }
    if(a.rating > b.rating){
      return -1;
    }
    return 0;
  }
  getImages(courses:any)
  {
  
    for(let i of courses){
     
      
      if(i.courseImageId){
        this._http.getCourseImage(i.courseImageId).subscribe(res=>{
          let safe:SafeUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res))
          i.image = safe;
        });
      }
    }
  }
}
