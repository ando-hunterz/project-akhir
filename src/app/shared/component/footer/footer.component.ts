import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaApiService } from '../../services/mahasiswa-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public logStat: boolean = null;

  constructor(private route: Router, private mahasiswaApi: MahasiswaApiService) {
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



}
