import { Component, OnInit } from "@angular/core";
import { MahasiswaApiService } from "../../services/mahasiswa-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private xtoken: string;
  public logStat: boolean = null;

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    private route: Router
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
    console.log(this.xtoken);
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {
        this.route.navigate(["/homepage"]);
      },
      err => {
        alert(err);
        this.route.navigate([""]);
      }
    );
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
