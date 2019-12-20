import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  token:string = '';

  constructor(private httpClient: HttpClient, private loginService:LoginService) { 
    this.token = loginService.getToken();
  }

  getArtists(nameArtist){
    
    const API_URL = `${environment.API_URL}/search?q=${nameArtist}&type=artist%2Cartist&market=US&limit=10&offset=0`;
    
    
    return this.httpClient.get(API_URL, {
            headers: new HttpHeaders({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`
            })
          }).toPromise();


  }

  getAlbumsByArtistId(id){
    const API_URL = `${environment.API_URL}/artists/${id}/albums?include_groups=single%2Cappears_on&market=US&limit=3&offset=0`;
    
    return this.httpClient.get(API_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
        })
    })
    .toPromise();
  }

}
