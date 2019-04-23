import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import {Post} from './post/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  @Input()
  primaryColor: string;
  @Input()
  primaryColorLight: string;
  private posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .then((posts) => {
        // console.log(posts)
        this.posts = posts;
      });
  }

}
