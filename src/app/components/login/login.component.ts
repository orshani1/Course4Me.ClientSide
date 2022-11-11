import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() userEvent = new EventEmitter<Object>();
  @Output() registerEvent = new EventEmitter<Object>();
   
  constructor(private http:HttpService,private _router:Router) {

   }

  ngOnInit(): void {
  }
  handleSubmit(form:any){
    let obj = form.value;
    obj.email = obj.username;
    this.http.authenticate(obj).subscribe(res=>{
      localStorage.setItem("token",res as string);
      this.http.token = res as string;
      this.http.login(obj.username,obj.password,res as string).subscribe(res2=>{
      
        this.userEvent.emit(res2);
      });
    });
 
    
  }
  handleRegister(){
      this.registerEvent.emit('shalom');
  }
}
