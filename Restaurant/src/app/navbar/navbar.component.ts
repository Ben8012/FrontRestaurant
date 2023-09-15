import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _user! : any
  get User():any {return this._user}

  constructor(
    private _session : SessionService
  ){}


  ngOnInit(): void {
    this._session.$user.subscribe({
      next : (data : any)=>{
          //console.log(data);
          this._user = data;
      },
      error: (error : any)=>{
        console.log(error)
      }
      
    })
  }

  logout(){
    this._session.clearSession();
  }

}
