import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core';
import  User  from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserById(editUserId: string) {
    throw new Error('Method not implemented.');
  }
   apiUrl='http://localhost:3000';
httpClient=inject(HttpClient);
  constructor() { }
  getUsers(){
   return this.httpClient.get<User[]>(this.apiUrl+'/users');
  }
  getUser(id:string){
    return this.httpClient.get<User>(this.apiUrl+'/users/'+id);
   }
   updateUser(id:string,model:User){
    return this.httpClient.put<User>(this.apiUrl+'/users/'+id,model);
   }
  addUser(model:User){
    return this.httpClient.post<User>(this.apiUrl+'/users',model);
  }
  deleteUser(id:string){
    return this.httpClient.delete<User>(this.apiUrl+'/users/'+id);
  }
}
