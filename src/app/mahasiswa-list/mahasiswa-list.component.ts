import { Component, OnInit } from "@angular/core";
import { Mahasiswa } from "../shared/model/mahasiswa";
import { MahasiswaApiService } from "../shared/services/mahasiswa-api.service";
import { trigger, transition, animate, style, state } from "@angular/animations";
import { Router } from '@angular/router';
import { Group } from '../group/group.component';

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
    this.mahasiswaApi.postUserVerify().subscribe(
      res => { console.log(res);
              },
      err => {
        console.log(err);this.route.navigate(['/login']);
      localStorage.removeItem('token'); }
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
