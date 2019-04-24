import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {

  imageUrl = 'https://i.redd.it/ceebwzyhu7s01.jpg';

  constructor() { }

  ngOnInit() {
  }

}
