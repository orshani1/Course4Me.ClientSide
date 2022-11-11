
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  public courses:any = {};
  constructor(private service:HttpService) {
   this.service.getAllUsers().subscribe(p=>{
      this.courses = p;
      console.log('Courses = ', this.courses);
   });

   }

  ngOnInit(): void {
 
  }

}
