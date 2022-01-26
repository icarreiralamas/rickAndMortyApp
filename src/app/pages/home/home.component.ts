import { Component, HostListener, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character-info';
import { RickAndMortyService } from '../../services/rick-and-morty-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public characters : Character[] = [];
  public cargando: boolean = true;


  @HostListener('window:scroll')
  onScroll(){

    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if( pos > max){
      //Llamada al servicio
      if(this.rickAndMortyService.cargando) {return;}

      this.rickAndMortyService.getCharacters().subscribe( characters =>{
          this.characters.push(...characters);
      } )
    }
    //return 1;
  }


  constructor(private rickAndMortyService: RickAndMortyService) {

   }

  ngOnInit(): void {
    
    if(this.cargando){
      return;
    }

    this.rickAndMortyService.getCharacters().subscribe(
      resp => {
        console.log(resp);
        this.characters= resp;
      }
    )
  }

  ngOnDestroy(): void {
    this.rickAndMortyService.resetPage();
    
  }

}
