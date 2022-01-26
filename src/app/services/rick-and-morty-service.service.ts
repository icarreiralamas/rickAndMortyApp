import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CharacterInfo, Character } from '../interfaces/character-info';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { EpisodeInfo } from '../interfaces/episode-info';
import { Location, LocationInfo } from '../interfaces/location-info';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private baseUrl: string = 'https://rickandmortyapi.com/api';
  private page = 1;
  public cargando= false;
  public urlsEpisodes: string[] =[];
  public episode: string = "";

  constructor(private http: HttpClient) { 
    
  }

  get params (){
    
    return{
      page: this.page
    }
  }

  getCharacters(): Observable<Character[]>{

    if(this.cargando){
      //cargando peliculas
      return of([]);
    }
    
    this.cargando= true;

      return this.http.get<CharacterInfo>(`${this.baseUrl}/character`, {params: this.params})
      .pipe(
        map((resp) => resp.results), tap(()=>{
          console.log(tap)
          this.page +=1;
          this.cargando = false;
        })
      )
  }

  getCharacterInfo(id: number): Observable<CharacterInfo>{

    return this.http.get<CharacterInfo>(`${this.baseUrl}/character/${id}`);

  }

  getCharacterInfoUrl(urlCharacter: string): Observable<CharacterInfo>{

    return this.http.get<CharacterInfo>(`${urlCharacter}`);

  }


  getEpisodeInfo(url: string): Observable<EpisodeInfo>{  
    return this.http.get<EpisodeInfo>(url);
  }

  getAllLocations(): Observable<LocationInfo>{

    if(this.cargando){
      //cargando peliculas
      return of();
    }
    
    this.cargando= true;

    return this.http.get<LocationInfo>(`${this.baseUrl}/location`,  {params: this.params})
          .pipe(
            map((resp) => resp), tap(()=>{
              this.page +=1;
              this.cargando = false;
      })
    )
  }

  getInfoLocation(id:number):Observable<Location>{

      return this.http.get<Location>(`${this.baseUrl}/location/${id}`);


  }

  resetPage(){
    this.page = 1;
  }

}
