import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MahasiswaApiService } from "../../services/mahasiswa-api.service";
import { xToken } from "../../model/loginDetails";
import * as $ from "jquery/dist/jquery.min.js";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  animations: []
})
export class FooterComponent implements OnInit {
  public logStat: boolean = null;
  private token: xToken = { token: null };

  constructor(private mahasiswaApi: MahasiswaApiService, public route: Router) {
    //Footer Child Button Display
    $(document).ready(function() {
      $(".btn-drop").hover(
        function() {
          $(this)
            .children("p")
            .addClass("drop-text-display animated fadeIn");
          $(this)
            .children("p")
            .removeClass("drop-text-none");
        },
        function() {
          $(this)
            .children("p")
            .addClass("drop-text-none");
          $(this)
            .children("p")
            .removeClass("drop-text-display animated fadeIn");
        }
      );
      $("#aboutUs").hover(
        function() {
          $(this).css({ width: "150px", transform: "translateX(-120px)" });
        },
        function() {
          $(this).css({ width: "", transform: "" });
        }
      );
      $("#searchMaha").hover(
        function() {
          $(this).css({ width: "220px", transform: "translateX(-190px)" });
        },
        function() {
          $(this).css({ width: "", transform: "" });
        }
      );
      $("#groupMaha").hover(
        function() {
          $(this).css({ width: "210px", transform: "translateX(-180px)" });
        },
        function() {
          $(this).css({ width: "", transform: "" });
        }
      );
      $("#addMaha").hover(
        function() {
          $(this).css({ width: "180px", transform: "translateX(-150px)" });
        },
        function() {
          $(this).css({ width: "", transform: "" });
        }
      );

    }

    );

    this.mahasiswaApi.currentToken.subscribe(
      value => {
        console.log(value);
        if (value == null) {
          this.logStat = false;
        } else {
          this.logStat = true;
          console.log(this.logStat);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.token.token = localStorage.getItem("token");
    if (this.token.token == null) {
      this.logStat = false;
    } else {
      this.logStat = true;
    }
  }
}
