import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ToursComponent} from './tours/tours.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/id', component: HomeComponent },
  { path: 'gallery', component: HomeComponent },
  { path: 'aboutUs', component: HomeComponent },
  { path: 'contacts', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
