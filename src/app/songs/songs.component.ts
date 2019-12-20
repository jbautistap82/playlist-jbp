import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


//Interface   
interface IDatos{
  tracks:{
    items:[];
  }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  newSong:string = '';
  songs:object [] = [];

  constructor(private songService: SongService,
    private loginServices:LoginService,
    private router:Router ){
        
      //this.songs = this.songService.getSongs();

  }

  searchSong(){
    this.songService.getSongs(this.newSong)
      .then((response:IDatos) => {
        console.log(response);
        this.songs = response.tracks.items;
      })
      .catch(error => console.log(error));
  }
  

  ngOnInit() {
    if(!this.loginServices.getToken()){
      this.router.navigate(['login']);
    }


  }

}
