import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-my-purchased-courses',
  templateUrl: './my-purchased-courses.component.html',
  styleUrls: ['./my-purchased-courses.component.css']
})
export class MyPurchasedCoursesComponent implements OnInit {
  userId = localStorage.getItem("userId") as any;
  courses:any = [];
  noCourse:boolean = true;
  languageMap = {
    english:0,
    hebrew:1,
    spanish:2
  }
  constructor(private _http:HttpService,private _router:Router,private sanitizer:DomSanitizer) {
    this._http.getPurchasedCourses(this.userId).subscribe(res=>{
      this.courses = res;
      this.giveLanguage(this.courses);
      this.giveCategory(this.courses);
      this.getImages(this.courses);
      if(this.courses.length > 0){
        this.noCourse = false;
      }

    });
   
   }
   giveLanguage(courses:any)
   {
    for(let i of courses){
      console.log(i.langauge);
      
      if(i.langauge == this.languageMap.english){
        i.tempLanguage = 'English';
      }
      else if (i.langauge == this.languageMap.hebrew){
        i.tempLanguage = 'Hebrew';
      }
      else{
        i.tempLanguage = 'Spanish';
      }
    }
   console.log('courses after adjustment',courses);
    
   }
   giveCategory(courses:any){
    for(let i of courses){
      if(i.category == 0){
        i.tempCategory = 'Development';
      }
      else if(i.category == 1){
        i.tempCategory = 'Design';
      }
      else if(i.category == 2){
        i.tempCategory = 'Marketing';
      }
      else if(i.category == 3){
        i.tempCategory = 'Life Style';
      }
      else if(i.category == 4){
        i.tempCategory = 'Health And Fitness';
      }
      else{
        i.tempCategory = 'Music';
      }
    }
   }
   handleDetail(id:any)
   {
    this._router.navigateByUrl(`course-detail/${id}`);
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
  ngOnInit(): void {
  }

}
