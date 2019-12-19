import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';


//Interface   
interface IDatos{
  artists:{
    items:[];
  }
}


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {


  newArtist:string = '';
  artists:object [] = [];

  constructor(private artistService:ArtistService) { 

  }

  searchArtists(){
    this.artistService.getArtists(this.newArtist)
    .then((response:IDatos)=>{
      console.log(response);
      this.artists = response.artists.items;      
    })
    .catch(error => console.log(error));
  }


  ngOnInit() {
  }

}
