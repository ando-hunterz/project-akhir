import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';
import { uData, xToken, authTkn } from '../shared/model/loginDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  public xtoken: xToken = {token: null};
  private authTkn: authTkn = null;
  private uData: uData = null;

  updateForm = this.fb.group({
    nama_lengkap: [''],
    alamat: [''],
    tanggal_lahir: [''],
    foto: [''],
<<<<<<< HEAD
    password: [null],
=======
    password: [''],
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
    token: localStorage.getItem('token')
  });

  constructor(
    private fb: FormBuilder,
    private mahasiswaApi: MahasiswaApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.xtoken.token = localStorage.getItem('token');
    console.log(this.xtoken);
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {
      this.uData = res;
      console.log(res);
      console.log(this.uData.result.user);
      this.preFilled();
      },
      err => {
        console.log(err);
        this.authTkn = err;
        localStorage.removeItem('token');
        alert(this.authTkn.info);
        this.route.navigate(['login']);
      }
    );

  }

  preFilled() {
    console.log(this.uData);
    this.updateForm.controls.nama_lengkap.setValue(this.uData.result.user.nama_lengkap);
    this.updateForm.controls.alamat.patchValue(this.uData.result.user.alamat);
    this.updateForm.controls.tanggal_lahir.patchValue(this.uData.result.user.tanggal_lahir);
    this.updateForm.controls.foto.patchValue(this.uData.result.user.foto);
  }
  get form() {
    return this.updateForm.value;
  }

  onSubmit() {
    if (this.updateForm.controls.password.value != null) {
      this.updateForm.controls.password.patchValue(
        CryptoJS.SHA512(this.updateForm.value.password).toString()
      );
    }

    function delet(obj) {
      for (const prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined) {
          delete obj[prop];
        }
      }
    }

    delet(this.form);

    console.log(this.form);

    this.mahasiswaApi.postUserUpdate(this.updateForm.value).subscribe(
      res => {
        console.log(res);
        this.authTkn = res;
<<<<<<< HEAD
        localStorage.setItem('token',this.authTkn.token);
=======
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
        alert(this.authTkn.info);
      },
      err => {
        console.log(err);
      }
    );
  }
}
