import { Component, OnInit } from '@angular/core';
import { MahasiswaDetail } from '../../shared/model/mahasiswa';
import { Validators, FormBuilder } from '@angular/forms';
import { MahasiswaApiService } from 'src/app/shared/services/mahasiswa-api.service';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.component.html',
  styleUrls: ['./add-mahasiswa.component.scss']
})
export class AddMahasiswaComponent implements OnInit {
  public mahasiswaDetail: MahasiswaDetail = null;

  addForm = this.fb.group({
    nama_lengkap: ['', Validators.required],
    angkatan: ['', Validators.required],
    alamat: ['', Validators.required],
    tanggal_lahir: ['', Validators.required],
    foto: ['', Validators.required],
    email: ['', Validators.required],
    nim: ['', Validators.required],
    prodi: ['', Validators.required],
    telepon: ['', Validators.required],
    token: localStorage.getItem('token')
  });

  constructor(private mahasiswaApi: MahasiswaApiService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addForm.value);
    this.mahasiswaApi.addMahasiswa(this.addForm.value).subscribe(
      res => {console.log(res);
              this.mahasiswaDetail = res;
              console.log(this.mahasiswaDetail)},
      err => { console.log(err)}
    )
  }
}
