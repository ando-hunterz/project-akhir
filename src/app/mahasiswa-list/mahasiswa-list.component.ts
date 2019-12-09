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
<<<<<<< HEAD
  public xtoken = {
    token: localStorage.getItem("token")
  };
  constructor(private mahasiswaApi: MahasiswaApiService, private route: Router) {}
=======
  private type: any;
  private order: any;
  constructor(private mahasiswaApi: MahasiswaApiService) { }

>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1

  ngOnInit() {
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        this.route.navigate(['/homepage']);
        localStorage.removeItem('token');
      }
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
<<<<<<< HEAD
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
=======
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
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
}
