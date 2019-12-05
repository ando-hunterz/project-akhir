
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { MahasiswaDetailComponent } from './mahasiswa-detail/mahasiswa-detail.component';
import { LoginComponent } from './login/login.component';
import { UserUpdateComponent} from './user-update/user-update.component';
import { GroupComponent } from './group/group.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'group', component: GroupComponent},
  { path: 'homepage/:nim', component: MahasiswaDetailComponent},
  { path: 'homepage', component: MahasiswaListComponent},
  { path: 'update', component: UserUpdateComponent},
  { path: 'profile', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
