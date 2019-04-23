import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToursComponent } from './tours/tours.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {TopToursComponent} from './home/top-tours/top-tours.component';
import { TourCardComponent } from './home/top-tours/tour-card/tour-card.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { BannerComponent } from './home/banner/banner.component';
import { WrapperBoxComponent } from './wrapper-box/wrapper-box.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdvantagesComponent } from './home/advantages/advantages.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';

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
    BannerComponent,
    WrapperBoxComponent,
    ContactUsComponent,
    AdvantagesComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
