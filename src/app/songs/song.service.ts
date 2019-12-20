import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  token:string='';
  constructor(private httpClient: HttpClient, private loginServices:LoginService) { 
    this.token = this.loginServices.getToken();
  }

  getSongs(nameSong){
    
    const API_URL = `${environment.API_URL}/search?q=${nameSong}&type=track%2Cartist&market=US&limit=10&offset=0`;
    
    return this.httpClient.get(API_URL, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      })
    }).toPromise();


    //return listSongs;
  }

}
