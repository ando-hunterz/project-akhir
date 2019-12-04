import { Component, OnInit } from "@angular/core";
import { MahasiswaApiService } from "../../services/mahasiswa-api.service";
import { Router } from "@angular/router";
import { xToken } from '../../model/loginDetails';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private token: xToken = {token: null};
  public logStat: boolean = null;

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    public route: Router
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
    console.log(this.token);
    this.token.token = localStorage.getItem('token');
    console.log(this.token);
    if(this.token.token != null){
    console.log(this.token);
    this.mahasiswaApi.postUserVerify(this.token).subscribe(
      res => {
        this.route.navigate(["/homepage"]);
      },
      err => {
        alert(err);
        this.route.navigate([""]);
      }
    );
    }
    else{
      this.route.navigate([""]);
    }
  }

  logIn() {
    this.route.navigate(["login"]);
  }

  logOut() {
    this.xtoken = null;
    this.logStat = false;
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
}
