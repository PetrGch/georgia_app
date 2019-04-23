import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post.model';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  @Input('primaryColor')
  primaryColor: string;
  @Input('primaryColorLight')
  primaryColorLight: string;

  constructor() { }

  ngOnInit() {}

  formatDate(date) {
    const formattedDate = moment(date).isValid() ? moment(date).format('DD/MM/YYYY') : '';

    return formattedDate;
  }

}
