import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaApiService } from '../../services/mahasiswa-api.service';
import { xToken } from '../../model/loginDetails';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: []
})
export class FooterComponent implements OnInit {
  public logStat: boolean = null;
  private token: xToken = { token: null };

  constructor(private mahasiswaApi: MahasiswaApiService, public route: Router) {
    // Footer Child Button Display
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      $('.btn-drop').hover(
        function() {
          console.log('worked!');
          $(this)
            .children('p')
            .addClass('drop-text-display animated fadeIn');
          $(this)
            .children('p')
            .removeClass('drop-text-none');
        },
        function() {
          console.log('this out');
          $(this)
            .children('p')
            .addClass('drop-text-none');
          $(this)
            .children('p')
            .removeClass('drop-text-display animated fadeIn');
        }
      );
      $('#aboutUs').hover(
        function() {
          $(this).css({ width: '130px', transform: 'translateX(-100px)' });
        },
        function() {
          $(this).css({ width: '', transform: '' });
        }
      );

    }

    );
    this.logStat = false;
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
    this.token.token = localStorage.getItem('token');
    if (this.token.token == null) {
      this.logStat = false;
    } else {
      this.logStat = true;
    }
  }
}
