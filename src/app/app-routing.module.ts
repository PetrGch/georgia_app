import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ToursComponent} from './tours/tours.component';
import {SingleTourComponent} from './single-tour/single-tour.component';
import {PlacesComponent} from './places/places.component';
import {SinglePlaceComponent} from './single-place/single-place.component';
import {GalleryComponent} from './gallery/gallery.component';
import {SingleGalleryComponent} from './single-gallery/single-gallery.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: SingleTourComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'places/:id', component: SinglePlaceComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: SingleGalleryComponent },
  { path: 'news', component: HomeComponent },
  { path: 'contacts', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
