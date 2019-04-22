import {Component, Input, OnInit} from '@angular/core';
import {TourCard} from '../../tour-card/tour-card.type';
import {MOCK_TOURS} from './top-tours.mock';

@Component({
  selector: 'app-top-tours',
  templateUrl: './top-tours.component.html',
  styleUrls: ['./top-tours.component.less']
})
export class TopToursComponent implements OnInit {

  @Input('primaryColor')
  primaryColor: string;
  @Input('primaryColorLight')
  primaryColorLight: string;

  private tours: TourCard[] = MOCK_TOURS;

  constructor() { }

  ngOnInit() {}

}
