import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginApi } from '../utils/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(formData:any){
    return this.http.post(loginApi, formData)
  }

  logout(){
    localStorage.removeItem('token');
  }
}
