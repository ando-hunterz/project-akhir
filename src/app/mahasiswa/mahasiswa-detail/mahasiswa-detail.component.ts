import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { MahasiswaDetail } from 'src/app/shared/model/mahasiswa';
import { authTkn } from 'src/app/shared/model/loginDetails';
import { MahasiswaApiService } from 'src/app/shared/services/mahasiswa-api.service';


@Component({
  selector: "app-mahasiswa-detail",
  templateUrl: "./mahasiswa-detail.component.html",
  styleUrls: ["./mahasiswa-detail.component.scss"]
})
export class MahasiswaDetailComponent implements OnInit {
  public mahasiswaDetail: MahasiswaDetail;
  public mahaUpdate: boolean = null;
  public nim: string;
  private authTkn: authTkn = null;

  updateMahaForm = this.fb.group({
    nama_lengkap: [''],
    angkatan: [''],
    alamat: [''],
    tanggal_lahir: [''],
    foto: [''],
    prodi: [''],
    telepon: [''],
    token: localStorage.getItem('token')
  });

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
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
     this.mahasiswaApi.viewUser().subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
     this.mahasiswaApi.postUserVerify().subscribe(
      res => { console.log(res);
              },
      err => {
        localStorage.removeItem('token');
        this.mahasiswaApi.getCurrentToken();
        this.router.navigate(['/login']);
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
    this.updateMahaForm.controls.alamat.patchValue(this.mahasiswaDetail.result.alamat);
    this.updateMahaForm.controls.foto.patchValue(this.mahasiswaDetail.result.foto);
    this.updateMahaForm.controls.prodi.patchValue(this.mahasiswaDetail.result.prodi);
    this.updateMahaForm.controls.tanggal_lahir.patchValue(this.mahasiswaDetail.result.tanggal_lahir);
    this.updateMahaForm.controls.telepon.patchValue(this.mahasiswaDetail.result.telepon);
  }


  onSubmit(){
    console.log(this.updateMahaForm.value);
    this.mahasiswaApi.postMahaUpdate(this.updateMahaForm.value, this.nim).subscribe(
      res => {console.log(res);
              this.authTkn = res;
              alert(this.authTkn.info);
              this.mahasiswaApi.getMahasiswaDetail(this.nim).subscribe(
                result => {
                  this.mahasiswaDetail = result;
                },
              );
              },
      err => {console.log(err);}
    );



  }
}
