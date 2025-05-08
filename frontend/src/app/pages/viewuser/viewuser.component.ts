import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import User from '../../types/user';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  imports: [RouterLink],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {
  users:User[]=[];
  userService=inject(UserService);
  ngOnInit(){
   this.userService.getUsers().subscribe((result)=>{
    this.users=result;
    console.log(this.users);
   });
  }
  delete(id:string){
    const ok=confirm('are you sure you want to delete this user');
    if(ok){
      this.userService.deleteUser(id).subscribe(result=>{
        
        this.users=this.users.filter(user=>user._id!=id);
      });
    }
  }

}
