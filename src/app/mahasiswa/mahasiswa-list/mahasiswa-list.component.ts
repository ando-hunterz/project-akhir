import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Group } from '../group/group.component';
import { Mahasiswa } from 'src/app/shared/model/mahasiswa';
import { MahasiswaApiService } from 'src/app/shared/services/mahasiswa-api.service';

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
  private grouping: Group = {ungrouped: null};
  constructor(private mahasiswaApi: MahasiswaApiService, private route: Router) {}

  ngOnInit() {
    this.mahasiswaApi.getAllMahasiswaData().subscribe(
      result => {
        this.mahasiswa = result;
        console.log(result);
        let mahajs = localStorage.getItem("MahaJSON");
        let groupjs = localStorage.getItem("GroupJSON")
        if(mahajs === "null" && groupjs === "null"){
          console.log("this.worked!");
          this.grouping.ungrouped = this.mahasiswa.result.mahasiswa;
          console.log(this.grouping);
          let mahaJSON = JSON.stringify(this.grouping);
          console.log(mahaJSON);
          localStorage.setItem("MahaJSON",mahaJSON);
        }
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
        this.route.navigate(['/login']);
        }
    );
  }

  mahaSortNimDesc() {
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
  mahaSortNimAsc() {
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

  mahaSortNameAsc(){
    this.mahasiswaApi.getAllMahasiswaDataSortByNameAsc().subscribe(
      result => {
        this.mahasiswa = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
  mahaSortNameDesc(){
    this.mahasiswaApi.getAllMahasiswaDataSortByNameDesc().subscribe(
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
