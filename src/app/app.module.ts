import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { ToursListItemComponent } from './tours/tours-list/tours-list-item/tours-list-item.component';
import { BannerComponent } from './banner/banner.component';
import { SingleTourComponent } from './single-tour/single-tour.component';

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
    ToursListItemComponent,
    BannerComponent,
    SingleTourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
