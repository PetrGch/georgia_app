export class SingleTour {
  id: number;
  title: string;
  subTitle: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
  createdAt: string;
  places: Place[];

  constructor(
    id: number,
    title: string,
    subTitle: string,
    price: number,
    discountPrice: number,
    imageUrl: string,
    createdAt: string,
    places: Place[]
  ) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.price = price;
    this.discountPrice = discountPrice;
    this.imageUrl = imageUrl;
    this.createdAt = createdAt;
    this.places = places;
  }
}

export class Place {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  durationFrom: number;
  activities: Activity[];
  latitude: number;
  longitude: number;
  durationTo?: number;

  constructor(
    id: number,
    title: string,
    subTitle: string,
    description: string,
    imageUrl: string,
    durationFrom: number,
    activities: Activity[],
    latitude: number,
    longitude: number,
    durationTo?: number,
  ) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imageUrl = imageUrl;
    this.durationFrom = durationFrom;
    this.durationTo = durationTo;
    this.activities = activities;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class Activity {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
