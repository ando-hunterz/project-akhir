import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mahasiswa } from '../models/Mahasiswa';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PelayanApiService {
  public user: any;
  public result: any;
  private urlApi = 'https://umn-pti2019.herokuapp.com';

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, public router: Router) { }

  getAllMahasiswa() {
    return this.http.get(`${this.urlApi}/api/ukm`);
  }

  getMahasiswaById(nim: number) {
    return this.http.get(`${this.urlApi}/api/ukm/${nim}`);
  }

  registrasi(data: any) {
    return this.http.post(`${this.urlApi}/api/register`, data);
  }

  login(user_name: string, password: string) {
    console.log(user_name, password);
    return this.http.post<{ token: string }>(`${this.urlApi}/api/login`, { user_name, password }).pipe(tap(res => {
      localStorage.setItem('access_token', res.token);
      console.log(this.jwtHelper.isTokenExpired());
      console.log(this.jwtHelper.getTokenExpirationDate());
    }));
  }

  verifikasi(token: string) {
    return this.http.post(`${this.urlApi}/api/verify`, { token });
  }

  logout() {
    localStorage.removeItem('access_token');
    window.alert('Logged out!');
    this.router.navigate(['/home']);
  }

  update(data: any) {
    return this.http.put(`${this.urlApi}/api/update`, data);
  }

  deleteFavorite(data: any) {
    return this.http.put(`${this.urlApi}/api/delete-favorites`, data);
  }
}
