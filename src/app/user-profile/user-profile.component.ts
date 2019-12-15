import { Component, OnInit } from '@angular/core';
import { uData, authTkn } from '../shared/model/loginDetails';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public xtoken = {token: localStorage.getItem("token")};

  public uData: uData = null;
  authTkn: authTkn = null;
  constructor(private mahasiswaApi: MahasiswaApiService,private route: Router) { }

  ngOnInit() {
    this.mahasiswaApi.viewUser().subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.mahasiswaApi.postUserVerify().subscribe(
      res => { console.log(res);
              },
      err => {this.route.navigate(['/login']);
      localStorage.removeItem('token'); }
    );
  }


}

