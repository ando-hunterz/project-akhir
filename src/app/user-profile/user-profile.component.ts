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

  public uData: uData;
  authTkn: authTkn = null;
  constructor(private mahasiswaApi: MahasiswaApiService,private route: Router) { }

  ngOnInit() {
    this.mahasiswaApi.viewUser().subscribe(
      res => {console.log(res);
              this.uData = res;
             console.log(this.uData);},
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

}
