import { Component, OnInit } from "@angular/core";
import { Mahasiswa } from "../shared/model/mahasiswa";
import { MahasiswaApiService } from "../shared/services/mahasiswa-api.service";
import { trigger, transition, animate, style, state } from "@angular/animations";
import { Router } from '@angular/router';


@Component({
  selector: "app-mahasiswa-list",
  templateUrl: "./mahasiswa-list.component.html",
  styleUrls: ["./mahasiswa-list.component.scss"],
})
export class MahasiswaListComponent implements OnInit {
  public mahasiswa: Mahasiswa = null;
  public xtoken = {
    token: localStorage.getItem("token")
  };
  constructor(private mahasiswaApi: MahasiswaApiService, private route: Router) {}

  ngOnInit() {
    this.mahasiswaApi.getAllMahasiswaData().subscribe(
      result => {
        this.mahasiswa = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
    this.mahasiswaApi.postUserVerify().subscribe(
      res => { console.log(res);
              },
      err => {
        console.log(err);this.route.navigate(['/login']);
      localStorage.removeItem('token'); }
    );
  }

  mahaSortIdDesc() {
    this.mahasiswaApi.getAllMahasiswaDataSortByNimDesc().subscribe(
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
    this.mahasiswaApi.getAllMahasiswaDataSortByNimAsc().subscribe(
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
