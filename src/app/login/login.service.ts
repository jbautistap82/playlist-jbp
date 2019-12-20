import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login() {
    const CLIENT_ID = '8234828aa6c74a189e4982d18eb1fc44';
    const SCOPES = [];
    const REDIRECT_URI = 'http://localhost:4200/login/';
    const URL_LOGIN = `https://accounts.spotify.com/en/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES}`;

    return new Promise((resolve) => {
      resolve(URL_LOGIN);
    });
  }

  getToken(){
    return window.localStorage.getItem('ferromex::playlist::token');
  }

  setToken(token){
    window.localStorage.setItem('ferromex::playlist::token',token);
  }

}
