import { authTkn } from './../shared/model/loginDetails';
import { MahasiswaApiService } from './../shared/services/mahasiswa-api.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
/*
@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  registerForm = this.fb.group({
    user_name: ['', Validators.required],
    fullname: ['', Validators.required],
    telepon: ['', Validators.required],
    email: ['', Validators.required],
    alamat: ['', Validators.required],
    birthdate: ['', Validators.required],
    foto-profil: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService

  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  // convenience getter for easy access to form fields
  get f() {return this.registerForm.controls; }

  onSubmit(() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.MahasiswaApiService.postUserRegister(this.registerForm.value)
    .subscribe(
      data => {
        this.router.navigate(['/login']});
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  });
  */


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public authTkn: authTkn = null;

  registerForm = this.fb.group({
    user_name: ['', Validators.required],
    fullname: ['', Validators.required],
    telepon: ['', Validators.required],
    email: ['', Validators.required],
    alamat: ['', Validators.required],
    birthdate: ['', Validators.required],
    foto_profil: ['', Validators.required],
    password: ['', Validators.required],
  });


constructor(private mahasiswaApi: MahasiswaApiService, private route: Router, private fb: FormBuilder) { }

ngOnInit() {
  }


onSubmit() {
    this.registerForm.controls.password.patchValue(
      CryptoJS.SHA512(this.registerForm.value.password).toString()
    );
    console.log(this.registerForm.value);
    this.mahasiswaApi.postUserRegister(this.registerForm.value).subscribe(
      res => {
        console.log(res);
        this.authTkn = res;
        console.log(this.authTkn);
        localStorage.setItem('token', this.authTkn.token);
        this.mahasiswaApi.getCurrentToken();
        this.route.navigate(['/hompage']);
        alert(this.authTkn.info);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
}
