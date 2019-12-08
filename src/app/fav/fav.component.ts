import { Component, OnInit } from "@angular/core";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fav",
  templateUrl: "./fav.component.html",
  styleUrls: ["./fav.component.css"]
})
export class FavComponent implements OnInit {
  public user: any;
  public username;
  public group;
  public result: any;
  public barang;

  constructor(public server: PelayanApiService, public http: HttpClient) {}

  ngOnInit() {
    var tokenSekarang = localStorage.getItem("access_token");

    this.server.verifikasi(tokenSekarang).subscribe(
      res => {
        console.log(res);
        this.barang = res;
        console.log(this.barang);
        this.username = this.barang.result.user.user_name;
        console.log(this.username);
        this.getFav();
      },
      err => console.log(err)
    );
  }

  getFav() {
    this.http
      .get(
        `https://umn-pti2019.herokuapp.com/api/user/${this.username}/favorites?type=ukm`
      )
      .subscribe(
        result => {
          this.group = result;
          console.log(this.group);
        },
        error => console.log(error)
      );
  }

  delFav(id_kode_nim_isbn_favorited: string) {
    let tokenSekarang = localStorage.getItem("access_token");
    let hapus = {
      type: "ukm",
      id_kode_nim_isbn_favorited: id_kode_nim_isbn_favorited,
      token: tokenSekarang
    };
    this.server.deleteFavorite(hapus).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
}
