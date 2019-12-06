
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { MahasiswaDetailComponent } from './mahasiswa-detail/mahasiswa-detail.component';
import { LoginComponent } from './login/login.component';
import { UserUpdateComponent} from './user-update/user-update.component';
import { GroupComponent } from './group/group.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddMahasiswaComponent } from './add-mahasiswa/add-mahasiswa.component';

const routes: Routes = [
  { path: '', component: HomeComponent,data: {animation: 'home'}},
  { path: 'login', component: LoginComponent,data: {animation: 'login'}},
  { path: 'group', component: GroupComponent,},
  { path: 'homepage/:nim', component: MahasiswaDetailComponent, data: {animation: 'detail'}},
  { path: 'homepage', component: MahasiswaListComponent,data: {animation: 'homepage'}},
  { path: 'profile', component: UserProfileComponent,data: {animation: 'profile'}},
  { path: 'update', component: UserUpdateComponent, data: {animation: 'update'}},
  { path: 'add', component: AddMahasiswaComponent, data: {animation: 'add'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
