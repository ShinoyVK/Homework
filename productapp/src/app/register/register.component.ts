import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title:String = "Register user";

  constructor(private userServiceObj: UserService, private router: Router) { }
  newUser = new UserModel(null,null,null,null,null,null,null,null,null);

  ngOnInit(): void {
  }

  addUser(){
    this.userServiceObj.newUser(this.newUser);
    console.log(JSON.stringify(this.newUser));
    this.router.navigate(['/login']);
  }

}
