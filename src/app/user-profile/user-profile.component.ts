import { Component, OnInit } from '@angular/core';
import { xToken, uData } from '../shared/model/loginDetails';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public xtoken = {
    token: localStorage.getItem('token')
  }

  public uData: uData = null;

  constructor(private mahasiswaApi: MahasiswaApiService) { }

  ngOnInit() {
    this.mahasiswaApi.postUserVerify(this.xtoken).subscribe(
      res => {console.log(res);
        this.uData = res;
        console.log(this.uData);
      },
      err => {console.log(err);}
    );
  }

}
