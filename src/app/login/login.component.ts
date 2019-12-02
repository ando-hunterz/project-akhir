import { Component, OnInit } from '@angular/core';
import { LoginDetails, authTkn} from '../shared/model/loginDetails';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';
import {  Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetail = new LoginDetails('', '', false);

  public authTkn: authTkn = null;

  loginForm = this.fb.group({
    user_name: [''],
    password: [''],
    remember_me: [false],
  });


  constructor(private mahasiswaApi: MahasiswaApiService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginForm.controls.password.patchValue(
      CryptoJS.SHA512(this.loginForm.value.password).toString()
    );
    console.log(this.loginForm.value);
    this.mahasiswaApi.postUserLogin(this.loginForm.value).subscribe(
      res => {
        console.log(res);
        this.authTkn = res;
        console.log(this.authTkn);
        localStorage.setItem('token', this.authTkn.token);
        this.mahasiswaApi.getCurrentToken();
        this.route.navigate(['/homepage']);
        alert(this.authTkn.info);
      },
      error => {console.log(error);
                alert(error.error.message); }
    );
  }

}
