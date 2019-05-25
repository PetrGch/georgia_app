import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

export class Gallery {
  id: number;
  title: string;
  thumbnailPreview: string;
  thumbnailFull: string;
  images: GalleryImage[];

  constructor(
    id: number,
    title: string,
    thumbnailPreview: string,
    thumbnailFull: string,
    images: GalleryImage[])
  {
    this.id = id;
    this.title = title;
    this.thumbnailPreview = thumbnailPreview;
    this.thumbnailFull = thumbnailFull;
    this.images = images;
  }
}

export class GalleryImage {
  id: number;
  preview: string;
  full: string;
  width: number;
  height: number;

  constructor(id: number, preview: string, full: string, width: number, height: number) {
    this.id = id;
    this.preview = preview;
    this.full = full;
    this.width = width;
    this.height = height;
  }
}

export const GALLERY_MOCK_IMAGE: any = [
  {
    preview: '/assets/img/yi-sung-tsai-04--vertical--preview.jpg',
    full: '/assets/img/yi-sung-tsai-04--vertical.jpg',
    width: 669,
    height: 1000
  },
  {
    preview: '/assets/img/yi-sung-tsai-01--preview.jpg',
    full: '/assets/img/yi-sung-tsai-01.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-03--preview.jpg',
    full: '/assets/img/yi-sung-tsai-03.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-05--preview.jpg',
    full: '/assets/img/yi-sung-tsai-05.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-06--preview.jpg',
    full: '/assets/img/yi-sung-tsai-06.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-07--preview.jpg',
    full: '/assets/img/yi-sung-tsai-07.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-08--preview.jpg',
    full: '/assets/img/yi-sung-tsai-08.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-09--preview.jpg',
    full: '/assets/img/yi-sung-tsai-09.jpg',
    width: 1000,
    height: 669
  },
  {
    preview: '/assets/img/yi-sung-tsai-10--preview.jpg',
    full: '/assets/img/yi-sung-tsai-10.jpg',
    width: 1000,
    height: 669
  },
];

const MOCK_GALLERY: Gallery[] = [
  new Gallery(
    1,
    'Some good place photos',
    '/assets/img/yi-sung-tsai-04--vertical--preview.jpg',
    '/assets/img/yi-sung-tsai-09.jpg',
    GALLERY_MOCK_IMAGE
  ),
  new Gallery(
    2,
    'New Gallery',
    '/assets/img/yi-sung-tsai-10--preview.jpg',
    '/assets/img/yi-sung-tsai-09.jpg',
    GALLERY_MOCK_IMAGE
  ),
  new Gallery(
    3,
    'Again new one',
    '/assets/img/yi-sung-tsai-08--preview.jpg',
    '/assets/img/yi-sung-tsai-09.jpg',
    GALLERY_MOCK_IMAGE
  )
];

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleryLoader = new Subject<Gallery[]>();
  singleGalleryLoader = new Subject<Gallery>();

  constructor() { }

  loadPlace(): void {
    this.mockFetch()
      .then((gallery) => {
        this.galleryLoader.next(gallery);
      });
  }

  mockFetch(): Promise<Gallery[]> {
    return new Promise((resolve) => {
      resolve(MOCK_GALLERY);
    });
  }

  loadGalleryById(id: number) {
    Promise.resolve(MOCK_GALLERY[id - 1]).then((data) => {
      this.singleGalleryLoader.next(data);
    });
  }
}
