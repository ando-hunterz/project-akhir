import { Component, OnInit } from '@angular/core';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
  public regForm: any;

  constructor(public pelayan: PelayanApiService, public fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      uname: ['', Validators.required],
      telepon: ['', Validators.required],
      email: ['', Validators.required],
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  newUserRegis() {
    var username = this.regForm.value.uname;
    var telepon = this.regForm.value.telepon;
    var email = this.regForm.value.email;
    var nama_lengkap = this.regForm.value.nama_lengkap;
    var alamat = this.regForm.value.alamat;
    var tanggal_lahir = this.regForm.value.tanggal_lahir;
    var foto = this.regForm.value.foto;
    var password = CryptoJS.SHA512(this.regForm.value.password).toString();

    var formRegistrasi = {
      'user_name': username,
      'telepon': telepon,
      'email': email,
      'nama_lengkap': nama_lengkap,
      'alamat': alamat,
      'tanggal_lahir': tanggal_lahir,
      'foto': foto,
      'password': password
    }

    this.pelayan.registrasi(formRegistrasi).subscribe(res => console.log(res), err => console.log(err));
  }
}
