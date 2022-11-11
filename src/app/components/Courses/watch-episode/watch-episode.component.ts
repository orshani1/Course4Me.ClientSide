import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-watch-episode',
  templateUrl: './watch-episode.component.html',
  styleUrls: ['./watch-episode.component.css']
})
export class WatchEpisodeComponent implements OnInit {
@Input() courseId:any;
episodes:any = []; 
selected:string = "";
selectedIndex:number = 0;
episodesPaths:string[] = [];
@ViewChild('video') input:ElementRef; 
  constructor(private _http:HttpService,private sanitizer:DomSanitizer,private element:ElementRef) {
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
      //Add 'implements AfterContentChecked' to the class.
      if(this.courseId){

        this._http.getEpisodes(this.courseId).subscribe(res=>{
          this.episodes = res;
          this.handleVideo();
          
        });
      }
  }
 
   handleVideo(){
    for(let i of this.episodes){
      this._http.getSinglePath(i.videoId).subscribe(res=>{
        i.video = res;
        this.episodesPaths.push(i.video);
      });
    }
    
    
   
        
    
    
    
    
    
    
    
    
   }
  
  
    
  ngOnInit(): void {    
 
    

    
  
    
  }
  handleClick(event:any){
    
    const episodeName = event.target.innerText as string;
    for(let i of this.episodes){
      let name:string = i.episodeName;
      console.log('object in loop name',name.split("").map(x => x.charCodeAt(0)));
      console.log('episodeName from HTML',episodeName.split("").map(x => x.charCodeAt(0)));
      if(i.episodeName === episodeName){
        this.selected = i.video;
        
      }
      
    }    
   
      
      
    }
     
  
}
