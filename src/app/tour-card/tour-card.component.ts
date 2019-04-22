import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.less']
})
export class TourCardComponent implements OnInit {

  private tourTitle: string = null;
  private tourSubTitle: string = null;
  private tourDescription: string = null;
  private tourImageUrl: string = null;

  constructor() {
  }

  @Input()
  set title(inputTitle: string) {
    this.tourTitle = inputTitle;
  }

  @Input()
  set subTitle(inputSubTitle: string) {
    this.tourSubTitle = inputSubTitle;
  }

  @Input()
  set description(inputDescription: string) {
    this.tourDescription = inputDescription;
  }

  @Input()
  set imageUrl(inputImageUrl: string) {
    this.tourImageUrl = inputImageUrl;
  }

  ngOnInit() {
  }

}
