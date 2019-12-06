import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaApiService } from '../../services/mahasiswa-api.service';
import { xToken } from '../../model/loginDetails';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [

  ]
})
export class FooterComponent implements OnInit {
  public logStat: boolean = null;
  private token: xToken = { token: null };

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    public route: Router,
  ) {
    $(document).ready(function(){
      $('.dropdown-submenu').on("click", function(e){
        $(this).next('btn').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });
    this.logStat = false;
    this.mahasiswaApi.currentToken.subscribe(value => {
      console.log(value);
      if (value == null) {
        this.logStat = false;
      } else {
        this.logStat = true;
        console.log(this.logStat);
      }
    },
      err => { console.log(err); });
  }



  ngOnInit() {
    this.token.token = localStorage.getItem('token');
    if(this.token.token == null){
    this.logStat = false;}
    else{
      this.logStat = true;
    }

  }



}
