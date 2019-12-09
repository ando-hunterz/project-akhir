import { Component, OnInit } from '@angular/core';
import { MahasiswaApiService } from '../../services/mahasiswa-api.service';
import { Router } from '@angular/router';
import { xToken } from '../../model/loginDetails';
import { Location } from '@angular/common';
<<<<<<< HEAD
import { transition, style, trigger, animate } from '@angular/animations';
=======
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
<<<<<<< HEAD
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
=======
  styleUrls: ['./header.component.scss']
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
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
    if(this.token.token == null){
    this.logStat = false;}
    else{
      this.logStat = true;
    }
  }

  onClick() {
    this.token.token = localStorage.getItem('token');
    console.log(this.token);
    if (this.token.token != null) {
      console.log(this.token);
      this.mahasiswaApi.postUserVerify(this.token).subscribe(
        res => {
          this.route.navigate(['/homepage']);
        },
        err => {
          console.log(err);
          this.logStat = false;
          this.route.navigate(['']);
        }
      );
    } else {
      this.logStat = false;
      this.route.navigate(['']);
    }
  }

  logIn() {
    this.route.navigate(['login']);
  }

  logOut() {
    this.token.token = null;
    this.logStat = false;
    localStorage.removeItem('token');
<<<<<<< HEAD
    this.mahasiswaApi.getCurrentToken();
=======
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
    this.route.navigate(['login']);
  }

  profileUser() {
<<<<<<< HEAD
    this.route.navigate(['profile']);
=======
    this.route.navigate(['update']);
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
  }

  registerUser() {
    this.route.navigate(['register']);
  }

  cancel() {
<<<<<<< HEAD
=======
    // tslint:disable-next-line: triple-equals
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
    if (this.route.url === '/login') {
      this.route.navigate(['']);
    } else {
      this.location.back();
    }
  }
}
