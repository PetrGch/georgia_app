export class Post {
  id: number;
  imageUrl: string;
  author: string;
  createdAt: string;
  title: string;
  text: string;

  constructor(id: number, imageUrl: string, author: string, createdAt: string, title: string, text: string) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.author = author;
    this.createdAt = createdAt;
    this.title = title;
    this.text = text;
  }
}
