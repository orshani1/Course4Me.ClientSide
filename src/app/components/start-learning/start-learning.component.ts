import { ThisReceiver } from '@angular/compiler';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer ,SafeUrl} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import User from 'src/interfaces/User';

@Component({
  selector: 'app-start-learning',
  templateUrl: './start-learning.component.html',
  styleUrls: ['./start-learning.component.css']
})
export class StartLearningComponent implements OnInit ,OnInit{
  courses:any[] = [];
  coursesArray:any = [];
  languageMap = {
    english:0,
    hebrew:1,
    spanish:2
  }
  constructor(private _http:HttpService,private _router:Router,private sanitizer:DomSanitizer) {

    

   
    
   }

handleBuy(id:number)
{
  this._router.navigateByUrl(`course-detail/${id}`);
}
checkIfOwnedCourse(course:any){
  for(let i of course){
    for(let j of i){
     if(!j.studentsId.includes(localStorage.getItem("userId"))){

       this.coursesArray.push(j);
     }
    }
    
   }
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
    this._http.getAllCourses().subscribe(res=>{
      this.giveCategory(res);
      this.giveLanguage(res);
      this.getImages(res);
      this.courses.push(res);
      this.checkIfOwnedCourse(this.courses);
      
      
    });
  }



}
