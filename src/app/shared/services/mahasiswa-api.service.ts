import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { Mahasiswa, MahasiswaDetail } from '../model/mahasiswa';
<<<<<<< HEAD
import { authTkn, uData } from '../model/loginDetails';
=======
import { authTkn, xToken, uData } from '../model/loginDetails';
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1

@Injectable({
  providedIn: 'root'
})

export class MahasiswaApiService {


  public currentToken: BehaviorSubject<any>;
  public token: Observable<string>;

  private mahasiswaUrl = 'https://umn-pti2019.herokuapp.com/api/mahasiswa/';
  private baseUrl = 'https://umn-pti2019.herokuapp.com/api/';
  constructor(private http: HttpClient) {
   this.currentToken = new BehaviorSubject<any>("null");
   }

  getAllMahasiswaData(): Observable<Mahasiswa> {
    return this.http.get<Mahasiswa>(this.mahasiswaUrl);
  }

  getAllMahasiswaDataSortByIdDesc(): Observable<Mahasiswa> {
    return this.http.get<Mahasiswa>(this.mahasiswaUrl + '?sort=id&order=desc');
  }

  getAllMahasiswaDataSortByIdAsc(): Observable<Mahasiswa> {
    return this.http.get<Mahasiswa>(this.mahasiswaUrl + '?sort=id&order=asc');
  }

<<<<<<< HEAD
  addMahasiswa(modal: any): Observable<MahasiswaDetail>{
    return this.http.post<MahasiswaDetail>(this.mahasiswaUrl, modal)

  }
=======
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
  getMahasiswaDetail(nim: string): Observable<MahasiswaDetail> {
    return this.http.get<MahasiswaDetail>(this.mahasiswaUrl + nim);
  }

  getCurrentToken() {
    this.currentToken.next(localStorage.getItem('token'));
  }

  postUserLogin(model: any): Observable<authTkn> {
    return this.http.post<authTkn>(this.baseUrl + 'login', model);
  }

  postUserRegister(model: any): Observable<authTkn> {
    return this.http.post<authTkn>(this.baseUrl + 'register', model);
  }
  postUserUpdate(model: any): Observable<authTkn> {
    return this.http.put<authTkn>(this.baseUrl + 'update', model);
<<<<<<< HEAD
  }
  postUserVerify(model: any): Observable<uData> {
    return this.http.post<uData>(this.baseUrl + 'verify', model);
  }

  postMahaUpdate(model: any, nim: string): Observable<any> {
    return this.http.put<any>(this.mahasiswaUrl + nim, model);
=======
  }
  postUserVerify(model: any): Observable<uData> {
    return this.http.post<uData>(this.baseUrl + 'verify', model);
>>>>>>> bd8c4bbdf63d789869657002981b9ded9d5b1bc1
  }

  viewUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/' + localStorage.getItem('user_name'));
  }


}
