export interface News {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author: string;
  media: Image;
}

export interface Image {
  url: string;
  type: string;
}
