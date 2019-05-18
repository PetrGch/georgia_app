import { Component, OnInit } from '@angular/core';
import {TopToursService} from '../home/top-tours/top-tours.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.less']
})
export class PlacesComponent implements OnInit {

  imageUrl = 'http://svladimir.ru/wp-content/uploads/2018/09/%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F.jpg';
  title = 'Все уголки Грузии';

  constructor(private topTourService: TopToursService) { }

  ngOnInit() {
    this.topTourService.loadTours();
  }

}
