import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  newUser(user)
  {
    return this.http.post<any>("http://localhost:3030/insertUser",{"newUser":user})
  }

  loginUser(userCred)
  {
    return this.http.post<any>("http://localhost:3030/loginUser",{"userCred":userCred})
  }

  loggedIn()
  {
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

}
