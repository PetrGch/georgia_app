import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  imageUrl = 'http://svladimir.ru/wp-content/uploads/2018/09/%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F.jpg';
  title = 'Наши Контакты';

  constructor() { }

  ngOnInit() {
  }

}
