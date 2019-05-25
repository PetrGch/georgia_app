import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gallery, GalleryService} from '../gallery.service';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.less']
})
export class GalleryListComponent implements OnInit, OnDestroy {

  private galleries: Gallery[] = [];
  private galleryLoader: SubscriptionLike;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.loadPlace();
    this.galleryLoader = this.galleryService.galleryLoader
      .subscribe((galleries: Gallery[]) => {
        this.galleries = galleries.slice();
      });
  }

  ngOnDestroy() {
    this.galleryLoader.unsubscribe();
  }

}
