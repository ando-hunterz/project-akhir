import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { MahasiswaDetailComponent } from './mahasiswa-detail/mahasiswa-detail.component';
import { LoginComponent } from './login/login.component';
import { UserUpdateComponent} from './user-update/user-update.component';
import { UserVerifyComponent } from './user-verify/user-verify.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'homepage/:nim', component: MahasiswaDetailComponent},
  { path: 'homepage', component: MahasiswaListComponent},
  { path: 'update', component: UserUpdateComponent},
  { path: 'verify', component: UserVerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
