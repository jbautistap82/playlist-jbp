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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsComponent } from './albums/albums.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MenuOverviewExampleComponent } from './menu-overview-example/menu-overview-example.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    NotFoundComponent,
    ArtistsComponent,
    AlbumsComponent,
    MenuOverviewExampleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule
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
