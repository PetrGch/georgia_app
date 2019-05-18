import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TopToursComponent } from './home/top-tours/top-tours.component';
import { TourCardComponent } from './tour-card/tour-card.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { WrapperBoxComponent } from './wrapper-box/wrapper-box.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdvantagesComponent } from './home/advantages/advantages.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { HotToursComponent } from './hot-tours/hot-tours.component';
import { HotTourComponent } from './hot-tours/hot-tour/hot-tour.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ToursListComponent } from './tours/tours-list/tours-list.component';
import { BannerComponent } from './banner/banner.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { TourPlaceComponent } from './single-tour/tour-place/tour-place.component';
import { MapComponent } from './map/map.component';
import { MapDirectionComponent } from './map/map-direction/map-direction.component';
import { PlacesComponent } from './places/places.component';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { PlaceCardComponent } from './place-card/place-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToursComponent,
    TopToursComponent,
    TourCardComponent,
    NavBarComponent,
    HomeBannerComponent,
    WrapperBoxComponent,
    ContactUsComponent,
    AdvantagesComponent,
    PostsComponent,
    PostComponent,
    HotToursComponent,
    HotTourComponent,
    SubscribeComponent,
    ModalWindowComponent,
    ToursListComponent,
    BannerComponent,
    SingleTourComponent,
    TourPlaceComponent,
    MapComponent,
    MapDirectionComponent,
    PlacesComponent,
    PlacesListComponent,
    PlaceCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AgmCoreModule
      .forRoot({
      apiKey: 'AIzaSyAQyqwW9u7Og3kWUb416ElshOWFrahUzpA'
    }),
    AgmDirectionModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
