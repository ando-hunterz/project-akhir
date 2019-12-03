import { Component, OnInit } from '@angular/core';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';
import { authTkn } from '../shared/model/loginDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-verify',
  templateUrl: './user-verify.component.html',
  styleUrls: ['./user-verify.component.scss']
})
export class UserVerifyComponent implements OnInit {

  public xtoken = {
    token: localStorage.getItem('token')
  }

  constructor(private mahasiswaApi: MahasiswaApiService, private route: Router) { }

  ngOnInit() {
    console.log(this.xtoken);
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {console.log(res);},
      err => {console.log(err);
        this.route.navigate(['login']);
      }
    );
  }

}
