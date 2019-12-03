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
    err => {console.log(err); });
  }

  ngOnInit() {

  }

  onClick() {
    console.log(this.xtoken);
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {
        console.log(res);
        this.route.navigate(["/homepage"]);
      },
      err => {
        console.log(err);
        this.route.navigate([""]);
      }
    );
  }

  logOut() {
    this.xtoken = null;
    this.logStat = false;
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
}
