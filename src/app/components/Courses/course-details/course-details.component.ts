import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course: any = {
    authorId: 1,
    category: 0,
    courseName: 'Test',
    description: 'Test',
    id: 1,
    langauge: 0,
    numOfStudents: 5,
    price: 200,
    rating: 179,
    ratingCount: 3,
    studentsId: '1,',
  };
  courseId:number = 0;
  userId:string = localStorage.getItem('userId') as string;
  isOwned:boolean = false;
  isAuthor:boolean = false;
  showModal:boolean = false;
  constructor(private _aRoute: ActivatedRoute, private _http: HttpService,private router:Router) {
    this.course = null;
    this.adjustCourse();
    

    
  
  }

  navigateToEpisodeForm(){
    this.router.navigateByUrl(`add-episode/${this.courseId}`);
  }
  navigateToEdit(){
    this.router.navigateByUrl(`edit-course/${this.courseId}`);
  }
  adjustCourse() {
  
    this._aRoute.params.subscribe((p) => {
      this.courseId = p['id'];
      this._http.getSingleCourse(p['id']).subscribe((res) => {
        this.course = res;
        if(this.course.authorId == this.userId){
          this.isAuthor = true;
        }
        if(this.course.studentsId.includes(this.userId)){
          this.isOwned = true;
        }
        
      });
    });
  }

  ngOnInit(): void {}
 

  handleBuy(){
    if(this.course.studentsId.includes(this.userId)){
      alert("you already purchased this course");
      return;
    }
    this._http.buyCourse(this.courseId,this.userId as any,localStorage.getItem("token") as string).subscribe(res=>{
      alert('Purchased Successfully');
      this.router.navigateByUrl("my-learnings");
        });

  }
  openModal(){
    if(!this.course.studentsId.includes(this.userId)){
      alert("Cant Rate unpurchased course");
      return;
    }
    this.showModal = true;
  }
  addRating(f:NgForm){
  
   this._http.addNewRating(this.courseId,f.value.rate).subscribe(res=>{
    this.router.navigateByUrl('/home');    
   });
   
  }
}
