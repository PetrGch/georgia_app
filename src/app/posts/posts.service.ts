import { Injectable } from '@angular/core';
import {Post} from './post/post.model';

// TODO Delete when endpoint will be implemented
export const MOCK_POSTS: Post[] = [
  new Post(
    1,
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    'Admin',
    '2018-11-18T01:28:34.000Z',
    'First post',
    'Long long long text'
  ),
  new Post(
    2,
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    'Admin',
    '2018-11-18T01:28:34.000Z',
    'Second post',
    'Long long long text'
  ),
  new Post(
    3,
    'https://www.worldatlas.com/r/w728-h425-c728x425/upload/63/ef/2e/shutterstock-280828427.jpg',
    'Admin',
    '2018-11-18T01:28:34.000Z',
    'Third post',
    'Long long long text'
  ),
];

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(MOCK_POSTS);
    });
  }

}
