import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ToursComponent} from './tours/tours.component';
import {SingleTourComponent} from './single-tour/single-tour.component';
import {PlacesComponent} from './places/places.component';
import {SinglePlaceComponent} from './single-place/single-place.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: SingleTourComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'places/:id', component: SinglePlaceComponent },
  { path: 'gallery', component: HomeComponent },
  { path: 'news', component: HomeComponent },
  { path: 'contacts', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
