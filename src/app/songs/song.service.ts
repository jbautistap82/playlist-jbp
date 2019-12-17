import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs(){
    let listSongs:object[] = [
      {name:'Proud Mary', type:'Rock Clasic', author:'Creedence'},
      {name:'Obladi Oblada', type:'Rock Clasic', author:'Beatles'},
      {name:'La dosis Perfect ', type:'SKA', author:'Panteon Rococo'},
      {name:'Soy de Rancho ', type:'Regional Mexicano', author:'El Komander'}
    ];
    return listSongs;
  }
  
}
