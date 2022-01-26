import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { RickAndMortyService } from '../../services/rick-and-morty-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {

  public character: any;
  public episodes: string[]=[];
  public episodeInfo: any[] = [];
  //public cargando: boolean = true;

  constructor(private activatedRoute : ActivatedRoute,
              private rickAndMortyService: RickAndMortyService,
              private router: Router, private location: Location) { }

  ngOnInit(): void {

    const {id} = this.activatedRoute.snapshot.params;  
  
    combineLatest([

      this.rickAndMortyService.getCharacterInfo(id),
      //this.rickAndMortyService.getEpisodeInfo(id)    

    ]).subscribe(([character])=>{
      //console.log(pelicula,cast)

      if(!character){
      
        this.router.navigateByUrl('/home');
         return;
       }
       this.episodeInfo = [];
       this.episodes = [];
       this.character = character; 
       this.episodes = this.character.episode;
       
       
       console.log(this.episodes);
       
      

       this.episodes.forEach(element => {
        this.rickAndMortyService.getEpisodeInfo(element).subscribe(episode =>
          //console.log(episode)
          {
          this.episodeInfo.push(episode);
          //this.episodeInfo.sort();
          this.episodeInfo.sort((a,b) => a.episode > b.episode ? 1 : -1);
          console.log(this.episodeInfo)
          }        
          )    
       });
           
  });

    //this.cargando= false;
    console.log(id);
  }

  onReturn(){
    this.location.back();
  }  

}
