import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password: ['']
    })
  }

  signUser(){
    console.log(this.signupForm.value)
    this.http.post<any>('http://localhost:3000/users', this.signupForm.value)
    .subscribe(res => {
      alert('sign up succesful')
      this.signupForm.reset()
      
    })
  }

}
