import { Component, HostListener } from '@angular/core';
import { HttpService } from './app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUser:any;
  isLogin = false;
  isRegister =false;
  user:any;
 
  constructor(private _service:HttpService,private router:Router){
    
    this._service.getSingleUser(1).subscribe(params=>{
      this.currentUser = params;
      console.log(this.currentUser);
    })
   
  }
  @HostListener('window:beforeunload',['$event'])
  handleBeforeUnload(event:any){
    localStorage.clear();
    
  }
  handleRegister(){
    this.isRegister = true;
    this.router.navigateByUrl("/register");
  }
  addUser($event:any)
  {
    
    let tempUser = {
      id:$event.id,
      username:$event.email,
      password:$event.password,
      coursePurchased:$event.coursePurchased,
      coursesCreated:$event.coursesCreated,

    };
  
    localStorage.setItem('userId',tempUser.id);
    this.user = tempUser;
    this.isLogin = true;
    this.router.navigateByUrl("/home");
    
  }
  registerUser($event:any){
    this.isRegister = true;
    
  }
}
