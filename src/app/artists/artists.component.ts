import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


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

  constructor(private artistService:ArtistService,
    private loginServices:LoginService,
    private router:Router) { 

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
    if(!this.loginServices.getToken()){
      this.router.navigate(['login']);
    }
  }

}
