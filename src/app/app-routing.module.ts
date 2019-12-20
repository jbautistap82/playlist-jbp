import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:SongsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'artist',
    component:ArtistsComponent
  },
  {
    path:'artist/:id/albums',
    component:AlbumsComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
