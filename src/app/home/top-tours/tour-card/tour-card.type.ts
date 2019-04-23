export class TourCard {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  duration: number;
  price: number;

  constructor(
    id: number,
    title: string,
    subTitle: string,
    description: string,
    imageUrl: string,
    duration: number,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.price = price;
  }
}
