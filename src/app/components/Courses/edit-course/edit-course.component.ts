import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course:any = {};
  file:File;
  public courseId:number = 0;
  constructor(private _aRoute:ActivatedRoute,private _http:HttpService) {
    this._aRoute.params.subscribe(p=>{
      this.courseId = p["id"];
    })
    this._http.getSingleCourse(this.courseId).subscribe(course=>{
      console.log("RESULTS ARE ",course);
      
      this.course = course;
      

    });
    
    
   }

  ngOnInit(): void {
  }
  handleSubmit(form:any){
    this._http.addCourseImage(this.file,this.courseId).subscribe(res=>{
      console.log(res);
    });
    let updatedCourse = {
      id:this.courseId,
      courseName:form.courseName,
      description:form.description,
      price:form.price, 
    }
    this._http.updateCourse(updatedCourse).subscribe(res=>{
      console.log("updated course is",res);
      
    })
    
    
  }
  onFileChange(event:any){
    const file:File = event.target.files[0];
    this.file = file;
  }

}
