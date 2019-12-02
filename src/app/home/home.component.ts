import { Component, OnInit } from '@angular/core';
import { xToken } from '../shared/model/loginDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public xtoken: xToken = null;

  constructor() { }

  ngOnInit() {
    console.log(this.xtoken);
  }

}

