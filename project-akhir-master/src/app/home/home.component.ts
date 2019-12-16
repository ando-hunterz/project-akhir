import { Component, OnInit } from '@angular/core';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private mahasiswaApi: MahasiswaApiService) { }

  ngOnInit() {
    this.mahasiswaApi.postUserVerify().subscribe(
      res => { console.log(res);
              },
      err => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_name');
        this.mahasiswaApi.getCurrentToken();
        }
    );
  }

}

