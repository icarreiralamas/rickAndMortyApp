import { LocationInfo } from './../../interfaces/location-info';
import { Component, Input, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  location: any;
  residentsArray: any[] = [];
  residents: string[] = [];
  loading: boolean = true;

  constructor(private rickAndMortyService: RickAndMortyService,
    private activatedRoute : ActivatedRoute,
    private router: Router, private loc: Location) { }

  ngOnInit(): void {

    const {id} = this.activatedRoute.snapshot.params;

    
    this.rickAndMortyService.getInfoLocation(id).subscribe(location =>
      {
        this.residents = [];
        console.log(location);
        this.location = location;
        //console.log(location.residents);
        this.residents = location.residents;
        console.log(location.residents.length);
        this.residents.forEach(element => {
            this.rickAndMortyService.getCharacterInfoUrl(element).subscribe(
              resp =>
                this.residentsArray.push(resp)
                
                //console.log("Character: ", resp)
            )          
        });
      }
      )
  }

  onReturn(){
    this.loc.back();
  }
}
