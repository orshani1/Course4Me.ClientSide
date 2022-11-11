import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  file:File
  constructor(private _http:HttpService) { }

  ngOnInit(): void {
  }
  handleFileChange(event:any){
    this.file = event.target.files[0];
  }
  handleRegister(form:any){

    
    let user = {
      email:form.value.email,
      password:form.value.password
    };
    this._http.addNewUser(this.file,user).subscribe(res=>{
      console.log(res);
      
    })
  }
}
