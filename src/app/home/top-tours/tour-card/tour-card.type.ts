export class TourCard {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;

  constructor(id: number, title: string, subTitle: string, description: string, imageUrl: string) {
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
