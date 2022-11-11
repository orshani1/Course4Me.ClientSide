import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-episode-form',
  templateUrl: './add-episode-form.component.html',
  styleUrls: ['./add-episode-form.component.css']
})
export class AddEpisodeFormComponent implements OnInit {
  videoId:number = 0;
  file:File;
  
  constructor(private _http:HttpService,private aRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
  }
  handleSubmit(f:any){
    let courseId = 0;
    console.log(f);
    
    this.aRoute.params.subscribe(p=>{
      courseId = p["id"];
    })
      this._http.uploadVideo(this.file,courseId).subscribe(res=>{
        f.courseId = courseId;
        f.videoId = res;
        this._http.uploadNewEpisode(f).subscribe(res=>{
        
            this._router.navigateByUrl(`course-detail/${courseId}`);
        })
        
      });
    
    
  }
  handleFileChange(event:any){
    
    this.file = event.target.files[0];

    
    
  }
}
