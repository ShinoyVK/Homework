import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../register/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String = "Log In";


  constructor(private userServiceObj: UserService, private router: Router) { }

  loginCred = new UserModel(null,null,null,null,null,null,null,null,null);

  ngOnInit(): void {
  }

  loginUserCred(){
    this.userServiceObj.loginUser(this.loginCred)
    .subscribe(
      res=>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/products']);

      }
    )
  }

}
