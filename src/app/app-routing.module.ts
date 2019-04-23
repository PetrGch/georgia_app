import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ToursComponent} from './tours/tours.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tour/:id', component: HomeComponent },
  { path: 'gallery', component: HomeComponent },
  { path: 'news', component: HomeComponent },
  { path: 'news/:id', component: HomeComponent },
  { path: 'contacts', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
