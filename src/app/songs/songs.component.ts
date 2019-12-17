import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  nameAdd:string = '';
  typeAdd:string = '';
  authorAdd:string = '';
  songs:object [] = [];

  



  constructor(private songService: SongService ){
      this.nameAdd = 'Escriba una cancion';
      this.typeAdd = 'Escriba el Tipo';
      this.authorAdd = 'Escriba un autor';
      
      this.songs = this.songService.getSongs();
  }

  

  addSong() {
      this.songs.push(
          {'name':this.nameAdd,
           'type':this.typeAdd,
           'author':this.authorAdd}
          );
          this.nameAdd = '';
          this.typeAdd = '';
          this.authorAdd = '';
  }
  ngOnInit() {
  }

}
