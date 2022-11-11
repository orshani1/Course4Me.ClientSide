import { DOCUMENT } from '@angular/common';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, Renderer2,ElementRef, OnInit, ViewChild } from '@angular/core';
import { Inject }  from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
 
})
export class NavBarComponent implements OnInit {
  isMobileNav = false;
  public isShowUserMenu:boolean = false;
  public isShowCategories:boolean = false;
  public isShowMyLearnings:boolean = false;
  public isShowTeachWithUs:boolean = false;
  public userMenuX:number=0;
  public userMenu:any;
  public isShowSearch:boolean = false;
  public isPcMonitor:boolean = false;
  
  public searchValues:string[] = [];
  courses:any = [];



 

  constructor(private _http:HttpService,private _router:Router) {
      this.userMenuX = window.innerWidth;
      this._http.getAllCourses().subscribe(res=>{
        this.courses = res;
      })


      
    
   }


  ngOnInit(): void {
    
    
  }
  showMobileNav(){
    this.isMobileNav = !this.isMobileNav;
  }

  handleHover(elementName:string)

  {

    if(elementName = 'user'){
      this.isShowUserMenu = !this.isShowUserMenu;
   
 

    }
    
  }
  closeNav(){
    this.isMobileNav = false;
  }
toggleShowMenu(){
  this.isShowUserMenu = !this.isShowUserMenu;
}
handleSearch(text:any){

  

    this.searchValues = [];
    this.isShowSearch = true;
    for(let i of this.courses){
      if(i.courseName.toLowerCase().includes(text.value)){
        this.searchValues.push(i.courseName);
      }
  }
  
}
handleClick(name:any){
  let choosen;
  for(let i of this.courses){
    if(i.courseName === name){
      choosen = i;
    }
  }
  this.isShowSearch = false;
  this._router.navigateByUrl(`/course-detail/${choosen.id}`, { skipLocationChange: true });
  
  
}
exitSearch(){
  this.isShowSearch= false;
}
}
