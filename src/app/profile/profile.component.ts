import { Component, OnInit } from '@angular/core';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: any;
  public regForm: any;

  constructor(public pelayan: PelayanApiService, public router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    var tokenNow = localStorage.getItem('access_token');
    this.pelayan.verifikasi(tokenNow).subscribe(res => {
      this.user = res;
      console.log(res);
    },
    err => console.log(err));

    this.regForm = this.formBuilder.group({
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  logout() {
    this.pelayan.logout();
  }

  updateProfile() {
    var token = localStorage.getItem('access_token');
    var nama_lengkap = this.regForm.value.nama_lengkap;
    var alamat = this.regForm.value.alamat;
    var tanggal_lahir = this.regForm.value.tanggal_lahir;
    var foto = this.regForm.value.foto;
    var password = CryptoJS.SHA512(this.regForm.value.password).toString();

    var formRegistrasi = {
      'nama_lengkap': nama_lengkap,
      'alamat': alamat,
      'tanggal_lahir': tanggal_lahir,
      'foto': foto,
      'password': password,
      'token': token
    }

    console.log(formRegistrasi);
    this.pelayan.update(formRegistrasi).subscribe((hasil: any) => {
      console.log(hasil);
      localStorage.setItem('access_token', hasil.token);
      alert('Data updated!');
      this.router.navigate(['home']);
    }, err => console.log(err));
  }

}
