import { LocationInfo } from './../../interfaces/location-info';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: any[] = [];
  

  @HostListener('window:scroll')
  onScroll(){

    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if( pos > max){
      //Llamada al servicio
      if(this.rickAndMortyService.cargando) {return;}

      this.rickAndMortyService.getAllLocations().subscribe( locations =>{
          this.locations.push(...locations.results);
      } )
    }
  }

  constructor(private activatedRoute : ActivatedRoute,
    private rickAndMortyService: RickAndMortyService,
    private router: Router, private location: Location) { }

  ngOnInit(): void {

    const {id} = this.activatedRoute.snapshot.params;

    this.rickAndMortyService.getAllLocations().subscribe(locations =>
      //console.log(locations.results)
      this.locations = locations.results
      )


  }

  getResidents(id: number){
    console.log(id);
    this.router.navigate(['/residents', id]);
  }  

  ngOnDestroy(): void {
    this.rickAndMortyService.resetPage(); 
  }

}

