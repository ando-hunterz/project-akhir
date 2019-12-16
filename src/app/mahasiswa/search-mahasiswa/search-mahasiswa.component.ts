import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from 'src/app/shared/model/mahasiswa';
import { MahasiswaApiService } from 'src/app/shared/services/mahasiswa-api.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search-mahasiswa',
  templateUrl: './search-mahasiswa.component.html',
  styleUrls: ['./search-mahasiswa.component.scss']
})
export class SearchMahasiswaComponent implements OnInit {

  public mahasiswa: Mahasiswa;
  public searchString: any;

  constructor(private mahasiswaApi: MahasiswaApiService, private route: Router) { }

  ngOnInit() {
    this.mahasiswaApi.postUserVerify().subscribe(
      res => { console.log(res);
              },
      err => {
        localStorage.removeItem('token');
        this.mahasiswaApi.getCurrentToken();
        this.route.navigate(['/login']);
        }
    );
    this.mahasiswaApi.getAllMahasiswaData().subscribe(
      result => {
        console.log(result);
        this.mahasiswa = result;
        console.log(this.mahasiswa.result.mahasiswa)
      },
      err => {
        console.log(err);
      }
    );
  }

  detail(nim){
    this.route.navigate(['/homepage/'+ nim]);
  }
}
