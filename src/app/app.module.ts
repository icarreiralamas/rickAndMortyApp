import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PosterGridComponent } from './components/poster-grid/poster-grid.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { CharacterComponent } from './pages/character/character.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { LocationComponent } from './pages/location/location.component';
import { ResidentsComponent } from './pages/residents/residents.component';
import { ResidentsSlideshowComponent } from './components/residents-slideshow/residents-slideshow.component';

import { SwiperModule } from 'swiper/angular';
import { LoadingComponent } from './components/loading/loading.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PosterGridComponent,
    SlideShowComponent,
    CharacterComponent,
    LocationComponent,
    ResidentsComponent,
    ResidentsSlideshowComponent,
    LoadingComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    SwiperModule,
    RouterModule
  ],
  exports:[
    ScrollingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
