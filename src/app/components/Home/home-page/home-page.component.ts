import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeUrl} from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  image:Blob;
  imageURL:SafeUrl;
  videosPathsArray :any;

  constructor(private _http:HttpService,private sanitizer:DomSanitizer) {
  

   }

  ngOnInit(): void {
    
  }
 
}
