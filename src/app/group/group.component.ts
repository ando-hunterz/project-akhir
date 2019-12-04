import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/model/mahasiswa';
import { MahasiswaApiService } from '../shared/services/mahasiswa-api.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  public mahasiswa: Mahasiswa = null;
  
  constructor(
    private mahasiswaApi: MahasiswaApiService) { }

  ngOnInit() {
    this.mahasiswaApi.getAllMahasiswaData().subscribe(
      result => {
        this.mahasiswa = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
