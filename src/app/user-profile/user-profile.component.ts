import { Component, OnInit } from '@angular/core';
import { authTkn, user } from '../shared/model/loginDetails';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public xtoken = {token: localStorage.getItem("token")};

<<<<<<< HEAD
  public uData: uData;
=======
  public uData: user;
>>>>>>> 2bb816d9cdee51d699a8a0790470f84fee99ceda
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

