import { Component, OnInit } from '@angular/core';
import { MahasiswaApiService } from '../../services/mahasiswa-api.service';
import { Router } from '@angular/router';
import { xToken } from '../../model/loginDetails';
import { Location } from '@angular/common';
import { transition, style, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('inAndOut',
    [
      transition(
        ':enter',
        [
          style({ opacity: 0}),
          animate('1s ease-in',
          style({ opacity: 1}))
        ]
      ),
      transition(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('1s ease-in',
            style({ opacity: 0 }))
        ]
      ),
      transition(
        '* => *',
        [
          style({ opacity: 1 }),
          animate('1s ease-in',
            style({ opacity: 0 }))
        ]
      )
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  private token: xToken = { token: null };
  public logStat: boolean = null;

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    public route: Router,
    private location: Location
  ) {
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
    this.token.token = localStorage.getItem('token');
    if (this.token.token == null){ this.logStat = false; }
    else {this.logStat = true;}
  }

  title() {
    this.route.navigate(['homepage']);
  }

  logIn() {
    this.route.navigate(['login']);
  }

  logOut() {
    this.token.token = null;
    this.logStat = false;
    localStorage.removeItem('token');
    localStorage.removeItem('MahaJSON');
    localStorage.removeItem('GroupJSON');
    localStorage.removeItem('user_name');
    this.mahasiswaApi.getCurrentToken();
    this.route.navigate(['login']);
  }

  profileUser() {
    this.route.navigate(['profile']);
  }

  registerUser() {
    this.route.navigate(['register']);
  }

  cancel() {
    if (this.route.url === '/login') {
      this.route.navigate(['']);
    } else {
      this.location.back();
    }
  }
}
