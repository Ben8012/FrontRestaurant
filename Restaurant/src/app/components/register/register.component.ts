import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormRegister } from '../../models/forms/register.form';
import { UserHttpService } from '../../services/http/user.http.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // exemple de creation du form dans le composent
  // private FormRegister2 : FormGroup =  new FormGroup({
  //   firstname : new FormControl("",[Validators.required]),
  //   lastname : new FormControl("",[Validators.required]),
  //   email : new FormControl("",[Validators.required]),
  //   passwd : new FormControl("",[Validators.required]),
  //   passwdConfirm : new FormControl("",[Validators.required]),
  // })

  private _formRegister : FormGroup = FormRegister();
  get FormRegister() : FormGroup { return this._formRegister}

  get Lastname():any {return this._formRegister.get('lastname')}
  get ConfirmPassword():any {return this._formRegister.get('passwdConfirm');}
  


  constructor(
    private _httpUser : UserHttpService,
    private _session : SessionService
    ){}

  register(){
    if(this._formRegister.valid){
        delete this._formRegister.value.passwdConfirm
        this._httpUser.register(this._formRegister.value).subscribe({
          next : (data : any)=>{
            this._session.saveSession(data);
           
          },
          error:(error : any)=> {
            console.log(error)
          }
          
        })
        console.log(this._formRegister.value)
    }
  }

}
