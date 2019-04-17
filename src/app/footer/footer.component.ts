import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  primaryColor = '#FFA852';
  primaryColorLight = '#FFC994';

  constructor() { }

  ngOnInit() {
  }

}
