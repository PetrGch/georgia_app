import {Component, Input, OnInit} from '@angular/core';
import {TourCard} from './tour-card/tour-card.type';
import {TopToursService} from './top-tours.service';

@Component({
  selector: 'app-top-tours',
  templateUrl: './top-tours.component.html',
  styleUrls: ['./top-tours.component.less']
})
export class TopToursComponent implements OnInit {

  @Input()
  primaryColor: string;
  @Input()
  primaryColorLight: string;

  private tours: TourCard[] = [];

  constructor(private topTourService: TopToursService) { }

  ngOnInit() {
    this.topTourService.getTours()
      .then((tours) => {
        this.tours = tours;
      });
  }

}
