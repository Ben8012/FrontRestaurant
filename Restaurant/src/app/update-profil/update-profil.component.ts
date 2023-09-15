import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormUpdateProfil } from '../models/forms/update-profil.form';
import { UserHttpService } from '../services/http/user.http.service';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.scss']
})
export class UpdateProfilComponent implements OnInit {
  private _user!:any

  private _formUpdateProfil : FormGroup = FormUpdateProfil();
  get FormUpdateProfil(): FormGroup {return this._formUpdateProfil}

  get Lastname():any {return this._formUpdateProfil.get('lastname')}

  constructor(
    private _httpUser : UserHttpService,
    private _session : SessionService
    ){}
  ngOnInit(): void {
    this._session.$user.subscribe({
      next:(data:any) => {
        this._formUpdateProfil.patchValue(data)
        this._user= data
      },
      error:(data:any)=> {
        console.log(data)
      }
      
    })
  }

    update(){
    if(this._formUpdateProfil.valid){
        
        this._httpUser.updateProfil(this._user.id,this._formUpdateProfil.value).subscribe({
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
