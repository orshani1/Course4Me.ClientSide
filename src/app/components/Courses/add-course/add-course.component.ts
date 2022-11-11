import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
const  userId = localStorage.getItem("userId") as any;
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit {
  file:File;
  constructor(private _http:HttpService,private _router:Router) 
  {
   
  }

  ngOnInit(): void {
  }
  onFileChange(event:any){
    const file:File = event.target.files[0];
    this.file = file;
  }
  handleSubmit(form:any){
    form.langauge = form.language;
    form.studentsId = "";
   
    

    this._http.postCourse(form,userId).subscribe(res=>{
      
      this._http.addCourseImage(this.file,res).subscribe(res2=>{
          this._router.navigateByUrl(`add-episode/${res}`);
      });
    });
 }
  

}