import { Component, OnInit } from "@angular/core";
import { MahasiswaApiService } from "../shared/services/mahasiswa-api.service";
import { MahasiswaDetail } from "../shared/model/mahasiswa";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { authTkn } from '../shared/model/loginDetails';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: "app-mahasiswa-detail",
  templateUrl: "./mahasiswa-detail.component.html",
  styleUrls: ["./mahasiswa-detail.component.scss"]
})
export class MahasiswaDetailComponent implements OnInit {
  public mahasiswaDetail: MahasiswaDetail = null;
  public mahaUpdate: boolean = null;
  public nim: string;
  private authTkn: authTkn = null;

  updateMahaForm = this.fb.group({
    nama_lengkap: [''],
    angkatan: [''],
    alamat: [''],
    tanggal_lahir: [''],
    foto: [''],
    email: [''],
    nim: [''],
    prodi: [''],
    telepon: [''],
    token: localStorage.getItem('token')
  });

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
     this.nim = this.route.snapshot.paramMap.get("nim");

     this.mahaUpdate = false;

     this.mahasiswaApi.getMahasiswaDetail(this.nim).subscribe(
      result => {
        this.mahasiswaDetail = result;
        console.log(result);
        console.log(this.mahasiswaDetail);
        this.preFilled();
      },
      error => {
        console.log(error);
      }
    );

  }

  updateVal(){
    this.mahasiswaApi.getMahasiswaDetail(this.nim).subscribe(
      res => {console.log(res);
              this.mahasiswaDetail = res;},
      err => {alert(err);}
    );
  }

  preFilled() {
    console.log(this.mahasiswaDetail);
    this.updateMahaForm.controls.nama_lengkap.setValue(this.mahasiswaDetail.result.nama_lengkap);
    this.updateMahaForm.controls.angkatan.patchValue(this.mahasiswaDetail.result.angkatan);
    this.updateMahaForm.controls.email.patchValue(this.mahasiswaDetail.result.email);
    this.updateMahaForm.controls.alamat.patchValue(this.mahasiswaDetail.result.alamat);
    this.updateMahaForm.controls.foto.patchValue(this.mahasiswaDetail.result.foto);
    this.updateMahaForm.controls.nim.patchValue(this.mahasiswaDetail.result.nim);
    this.updateMahaForm.controls.prodi.patchValue(this.mahasiswaDetail.result.prodi);
    this.updateMahaForm.controls.tanggal_lahir.patchValue(this.mahasiswaDetail.result.tanggal_lahir);
    this.updateMahaForm.controls.telepon.patchValue(this.mahasiswaDetail.result.telepon);
  }


  onSubmit(){
    console.log(this.updateMahaForm.value);
    this.mahasiswaApi.postMahaUpdate(this.updateMahaForm.value, this.nim).subscribe(
      res => {console.log(res);
              this.authTkn = res;
              alert(this.authTkn.info)},
      err => {console.log(err);}
    );
  }
}
