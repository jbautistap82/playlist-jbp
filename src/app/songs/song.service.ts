import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  getSongs(nameSong){
    
    const API_URL = `${environment.API_URL}/search?q=${nameSong}&type=track%2Cartist&market=US&limit=10&offset=0`;
    
    return this.httpClient.get(API_URL, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${environment.ACCESS_TOKEN}`
      })
    }).toPromise();


    //return listSongs;
  }

}
