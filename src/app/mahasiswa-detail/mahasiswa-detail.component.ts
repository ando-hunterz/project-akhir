import {
  Component,
  OnInit
} from '@angular/core';
import {
  MahasiswaApiService
} from '../shared/services/mahasiswa-api.service';
import {
  MahasiswaDetail
} from '../shared/model/mahasiswa';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-mahasiswa-detail',
  templateUrl: './mahasiswa-detail.component.html',
  styleUrls: ['./mahasiswa-detail.component.scss']
})
export class MahasiswaDetailComponent implements OnInit {

  public mahasiswaDetail: MahasiswaDetail = null;

  constructor(private mahasiswaApi: MahasiswaApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const nim = this.route.snapshot.paramMap.get('nim');

    this.mahasiswaApi.getMahasiswaDetail(nim).subscribe(
      result => {
        this.mahasiswaDetail = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
