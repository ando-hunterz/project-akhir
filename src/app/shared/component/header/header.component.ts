import { Component, OnInit } from "@angular/core";
import { MahasiswaApiService } from "../../services/mahasiswa-api.service";
import { Router } from "@angular/router";
<<<<<<< HEAD
import { xToken } from '../../model/loginDetails';
=======
import { Location } from "@angular/common";
>>>>>>> help

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
<<<<<<< HEAD
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private token: xToken = {token: null};
=======
  styleUrls: ["./header.component.scss"],

})
export class HeaderComponent implements OnInit {
  private xtoken: string;
>>>>>>> help
  public logStat: boolean = null;

  constructor(
    private mahasiswaApi: MahasiswaApiService,
<<<<<<< HEAD
    public route: Router
=======
    private route: Router,
    private location : Location
>>>>>>> help
  ) {
    this.logStat = false;
    this.mahasiswaApi.currentToken.subscribe(value => {
      console.log(value);
      if (value == null) {
        this.logStat = false;
      } else {
        this.logStat = true;
      }
    },
      err => { console.log(err); });
  }

  ngOnInit() {
    this.logStat = false;
  }

  onClick() {
<<<<<<< HEAD
    this.token.token = localStorage.getItem('token');
    console.log(this.token);
    if(this.token.token != null){
    console.log(this.token);
    this.mahasiswaApi.postUserVerify(this.token).subscribe(
=======
    console.log(this.xtoken);
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
>>>>>>> help
      res => {
        this.route.navigate(["/homepage"]);
      },
      err => {
<<<<<<< HEAD
        console.log(err);
        this.logStat = false;
        this.route.navigate([""]);
      }
    );
    }
    else{
      this.logStat = false;
      this.route.navigate([""]);
    }
=======
        alert(err);
        this.route.navigate([""]);
      }
    );
>>>>>>> help
  }

  logIn() {
    this.route.navigate(["login"]);
  }

  logOut() {
<<<<<<< HEAD
    this.token = null;
=======
    this.xtoken = null;
>>>>>>> help
    this.logStat = false;
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
<<<<<<< HEAD
=======

  cancel() {
    this.location.back();
  }
>>>>>>> help
}
