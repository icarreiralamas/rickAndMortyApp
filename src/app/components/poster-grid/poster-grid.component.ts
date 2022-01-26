import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../interfaces/character-info';

@Component({
  selector: 'app-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrls: ['./poster-grid.component.css']
})
export class PosterGridComponent implements OnInit {

  @Input() characters : Character[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCharacterClick(character: Character){
    console.log(character.id);
    this.router.navigate(['/character',character.id])
  }

}
