import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  

  private _user!:any
  get User():any{return this._user}

  constructor(
    private _session : SessionService
  ){}

  ngOnInit(): void {
    this._session.$user.subscribe({
      next: (data : any) => {
          this._user = data;
          console.log(this._user)
      },
      error:(data :any) => {
        console.log(data);
        
      }
    })
  }

}
