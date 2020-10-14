import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signInForm: FormGroup ;
  sing(){
    return "<a [routerLink]='chat'></a>"
  }
  constructor() { }
  
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.minLength(6),Validators.maxLength(12)])
    })
  }
  onSubmit(){
    console.log(this.signInForm.controls);
    
  }
}
