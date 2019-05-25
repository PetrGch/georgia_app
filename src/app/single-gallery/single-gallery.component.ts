import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gallery, GalleryService} from '../gallery/gallery.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TopToursService} from '../home/top-tours/top-tours.service';
import {SubscriptionLike} from 'rxjs';
import {GALLERY_CONFIG} from '../single-place/single-place.component';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.less']
})
export class SingleGalleryComponent implements OnInit, OnDestroy {

  singleGallery: Gallery;
  singleGalleryLoader: SubscriptionLike;
  config = GALLERY_CONFIG;

  constructor(private galleryService: GalleryService,
              private router: ActivatedRoute,
              private topTourService: TopToursService) { }

  ngOnInit() {
    this.topTourService.loadTours();
    this.router.params
      .subscribe((params: Params) => {
        this.galleryService.loadGalleryById(params.id);
      });
    this.singleGalleryLoader = this.galleryService.singleGalleryLoader
      .subscribe((gallery: Gallery) => {
        console.log(gallery)
        this.singleGallery = gallery;
      });
  }

  ngOnDestroy() {
    this.singleGalleryLoader.unsubscribe();
  }

}
