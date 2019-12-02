import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  public xtoken = {
    token: localStorage.getItem('token')
  };

  loginForm = this.fb.group({
    nama_lengkap: [null],
    alamat: [null],
    tanggal_lahir: [null],
    foto: [null],
    password: [null],
    token: localStorage.getItem('token')
  });

  constructor(
    private fb: FormBuilder,
    private mahasiswaApi: MahasiswaApiService
  ) {}

  ngOnInit() {
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  get form() {
    return this.loginForm.value;
  }

  onSubmit() {

    if (this.loginForm.controls.password != null) {
      this.loginForm.controls.password.patchValue(
        CryptoJS.SHA512(this.loginForm.value.password).toString()
      );
    }
    console.log(this.form);

    this.mahasiswaApi.postUserUpdate(this.loginForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
