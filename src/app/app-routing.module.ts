import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationComponent } from './pages/location/location.component';
import { ResidentsComponent } from './pages/residents/residents.component';

const routes: Routes = [

  {path: "home", component:HomeComponent},
  {path: "character/:id", component:CharacterComponent},
  {path: "locations", component:LocationComponent},
  {path: "residents/:id", component:ResidentsComponent},
  {path:'**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
