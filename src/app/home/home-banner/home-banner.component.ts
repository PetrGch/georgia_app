import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.less']
})
export class HomeBannerComponent implements OnInit {

  imageUrl = 'https://i.redd.it/ceebwzyhu7s01.jpg';

  constructor() { }

  ngOnInit() {
  }

}
