import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { SeatingPlanComponent } from './components/seating-plan/seating-plan.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'profil', component : ProfilComponent},
  {path : 'update-profil', component : UpdateProfilComponent},
  {path : 'seating-plan', component : SeatingPlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
