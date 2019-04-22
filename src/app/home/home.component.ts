import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  private primaryColor = '#FFA852';
  private primaryColorLight = '#FFC994';

  constructor() { }

  ngOnInit() {
  }

}
