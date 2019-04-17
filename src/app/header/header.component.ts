import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  primaryColor = '#FFA852';
  primaryColorLight = '#FFC994';

  constructor() { }

  ngOnInit() {
  }

}
