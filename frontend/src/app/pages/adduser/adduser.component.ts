import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import User from '../../types/user';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-adduser',
  imports: [ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  formBuilder=inject(FormBuilder);
  userform:FormGroup=this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    age:['',[Validators.required]],
    address:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(3)]]
  });
  userService=inject(UserService);
  router=inject(Router);
  route=inject(ActivatedRoute);
  editUserId!:string;
  ngOnInit(){
    this.editUserId=this.route.snapshot.params['id'];
    if(this.editUserId){
      this.userService.getUser(this.editUserId).subscribe(result=>{
        this.userform.patchValue(result);
      });
    }
    
    
  }
  adduser(){
    if(this.userform.invalid){
        alert('please fill all the fields');
      return;
    }
    if(this.editUserId){
      this.updateUser();
      return;
    }
    const model:User=this.userform.value ;
    this.userService.addUser(model).subscribe(result=>{
      alert('user added successfully');
      this.userform.reset();
      this.router.navigate(['/view']);
    });
  }

updateUser(){
  if(this.userform.invalid){
    alert('please fill all the fields');
  return;

}
const model:User=this.userform.value ;
this.userService.updateUser(this.editUserId,model).subscribe(result=>{
  alert('user updated successfully');
  this.userform.reset();
  this.router.navigate(['/view']);
})

}
}