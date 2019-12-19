import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { FormsModule } from '@angular/forms';
import { SongService } from './songs/song.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistService } from './artists/artist.service';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    NotFoundComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SongService,
    ArtistService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
