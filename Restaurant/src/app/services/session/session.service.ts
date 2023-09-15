import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public $user: BehaviorSubject<any> = new BehaviorSubject({} as any);

  constructor() { }


  saveSession(user : any){
    localStorage.setItem('token', JSON.stringify(user.token))
    localStorage.setItem('id', JSON.stringify(user.id))

    this.$user.next(user);
  }

  clearSession(){
    localStorage.clear();
    this.$user.next({} as any);
  }
}
