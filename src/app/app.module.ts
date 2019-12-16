import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { MahasiswaListComponent } from './mahasiswa/mahasiswa-list/mahasiswa-list.component';
import { MahasiswaDetailComponent } from './mahasiswa/mahasiswa-detail/mahasiswa-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { UserUpdateComponent } from './user-update/user-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupComponent } from './mahasiswa/group/group.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddMahasiswaComponent } from './mahasiswa/add-mahasiswa/add-mahasiswa.component';
import { SearchMahasiswaComponent } from './mahasiswa/search-mahasiswa/search-mahasiswa.component';
import { AboutUSComponent } from './about-us/about-us.component';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MahasiswaListComponent,
    MahasiswaDetailComponent,
    LoginComponent,
    RegisterComponent,
    UserUpdateComponent,
    GroupComponent,
    UserProfileComponent,
    AddMahasiswaComponent,
    SearchMahasiswaComponent,
    AboutUSComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['https://umn-pti2019.herokuapp.com/'],
        blacklistedRoutes: ['']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
