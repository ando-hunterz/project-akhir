import {
  Component,
  OnInit
} from '@angular/core';
import {
  Mahasiswa
} from '../shared/model/mahasiswa';
import {
  MahasiswaApiService
} from '../shared/services/mahasiswa-api.service';

@Component({
  selector: 'app-mahasiswa-list',
  templateUrl: './mahasiswa-list.component.html',
  styleUrls: ['./mahasiswa-list.component.scss']
})
export class MahasiswaListComponent implements OnInit {

  public mahasiswa: Mahasiswa = null;
  public xtoken = {
    token: localStorage.getItem('token')
  }
  constructor(private mahasiswaApi: MahasiswaApiService) { }


  ngOnInit() {
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.mahasiswaApi.getAllMahasiswaData().subscribe(
      result => {
        this.mahasiswa = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  mahaSortIdDesc() {
      this.mahasiswaApi.getAllMahasiswaDataSortByIdDesc().subscribe(
        result => {
          this.mahasiswa = result;
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
    }
    mahaSortIdAsc() {
      this.mahasiswaApi.getAllMahasiswaDataSortByIdAsc().subscribe(
        result => {
          this.mahasiswa = result;
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
    }
}
