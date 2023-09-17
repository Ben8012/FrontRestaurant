import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormLogin } from '../../models/forms/login.form';
import { UserHttpService } from '../../services/http/user.http.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  private _formLogin : FormGroup = FormLogin();
  get FormLogin() : FormGroup { return this._formLogin}

  get Email():any {return this._formLogin.get('email')}
 
  


  constructor(
    private _httpUser : UserHttpService,
    private _session : SessionService
    ){}

  login(){
    if(this._formLogin.valid){
        
        this._httpUser.login(this._formLogin.value).subscribe({
          next : (data : any)=>{
            this._session.saveSession(data);
           
          },
          error:(error : any)=> {
            console.log(error)
          }
          
        })
        
    }
  }
}
