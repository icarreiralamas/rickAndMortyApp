import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import SwiperCore,{ EffectFade, Pagination, Swiper, SwiperOptions, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import 'swiper/css/bundle';
import { Character } from '../../interfaces/character-info';

SwiperCore.use([Virtual]);
SwiperCore.use([EffectFade]);
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-residents-slideshow',
  templateUrl: './residents-slideshow.component.html',
  styleUrls: ['./residents-slideshow.component.css']
})
export class ResidentsSlideshowComponent implements OnInit {

  @Input()residents: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }


  ngAfterViewInit(): void {
    const swiper = new Swiper('swiper');
}
  
    
  config: SwiperOptions = {
    loop:false,
    slidesPerView: 5.3,
    spaceBetween: 500,
    freeMode: true,
    scrollbar: { draggable: true },
    navigation: true,
  };


  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  onCharacterClick(id: number){
    //console.log(id);
    this.router.navigate(['/character',id])
  }

}
