export interface Rss {
  $: RssAttributes;
  channel: Channel[];
}

export interface RssAttributes {
  version: string;
  'xmlns:content': string;
  'xmlns:media': string;
  'xmlns:wsj': string;
}

export interface Channel {
  title: string[];
  description: string[];
  link: string[];
  language: string[];
  copyright: string[];
  lastBuildDate: string[];
  ttl: string[];
  image: Image[];
  item: Item[];
}

export interface Image {
  title: string[];
  url: string[];
  link: string[];
}

export interface Item {
  guid: Guid[];
  title: string[];
  description: string[];
  link: string[];
  pubDate: string[];
  author: string[];
  'media:content': MediaContent[];
}

export interface Guid {
  _: string;
  $: GuidAttributes;
}

export interface GuidAttributes {
  isPermaLink: string;
}

export interface MediaContent {
  $: MediaContentAttributes;
  'media:credit': string[];
}

export interface MediaContentAttributes {
  url: string;
  medium: string;
  type: string;
}

export interface RssFeed {
  rss: Rss;
}
