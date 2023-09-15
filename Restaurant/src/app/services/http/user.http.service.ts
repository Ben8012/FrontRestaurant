import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url ="https://localhost:7022/api/User";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(
    private _http: HttpClient
  ) { }

  register(formRegister : any): Observable<any>{
    return this._http.post<any>(url,formRegister)
  }

  login(formLogin : any) : Observable<any>{
    return this._http.post<any>(url+'/Login',formLogin)
  }

  updateProfil(id: number,formUpdateProfil : any ): Observable<any>{
    return this._http.put<any>(url+'/'+id,formUpdateProfil)
  }

  getUserByToken(token : any):Observable<any>{
    const send = {TokenString : token}
    return this._http.post<any>(url+"/Token",send)
  }
  getUserById(id : any):Observable<any>{
    return this._http.get<any>(url+'/'+id)
  }
}
