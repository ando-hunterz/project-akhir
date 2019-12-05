import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { Mahasiswa, MahasiswaDetail } from '../model/mahasiswa';
import { authTkn, xToken, uData } from '../model/loginDetails';

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
  }
  postUserVerify(model: any): Observable<uData> {
    return this.http.post<uData>(this.baseUrl + 'verify', model);
  }



}
