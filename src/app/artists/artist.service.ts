import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getArtists(nameArtist){
    
    const API_URL = `https://api.spotify.com/v1/search?q=${nameArtist}&type=artist%2Cartist&market=US&limit=10&offset=0`;
    //const TOKEN = 'BQAqXrDk4QPuBohIUFnaWtm21PzY-mYQxrXok32yko5CleyJEH_Das6eM3vytVsp0dCYhgBj-EQ6XcC5pOVNjIn3AOfgujjAZPF7DBlQL4v5AFDr_q1dDAkW3RFz6ygLAEFchQBBSD666FE';
    
    return this.httpClient.get(API_URL, {
            headers: new HttpHeaders({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${AppSettings.TOKEN_API_SPOTIFY}`
            })
          }).toPromise();


  }
}
