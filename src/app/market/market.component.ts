import { Component, OnInit } from '@angular/core';
import { RssFeed } from '../model/news-rss';
import * as xml2js from 'xml2js';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { News } from '../model/news';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, CommonModule],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent implements OnInit{
  RssData: RssFeed | undefined;
  news: News[] = [];
  title: string | undefined;
  description!: string | undefined;
  date!: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.GetRssFeedData();
  }

  GetRssFeedData() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };

    this.http
      .get<any>(
        'https://feeds.content.dowjones.io/public/rss/mw_topstories',
        requestOptions
      )
      .subscribe((data) => {
        let parseString = xml2js.parseString;
        parseString(data, (_err: any, result: RssFeed) => {
          this.RssData = result
          this.ConvertNews();
        });
      });
  }

  ConvertNews() {
    this.title = this.RssData?.rss.channel[0].title[0];
    this.description = this.RssData?.rss.channel[0].description[0];
    this.date = this.RssData?.rss.channel[0].lastBuildDate[0];

    if (this.RssData?.rss.channel[0].item) {
      for (let i = 0; i < this.RssData?.rss.channel[0].item.length; i++) {
        this.news.push({
          title: this.RssData?.rss.channel[0].item[i].title[0],
          description: this.RssData?.rss.channel[0].item[i].description[0],
          link: this.RssData?.rss.channel[0].item[i].link[0],
          pubDate: this.RssData?.rss.channel[0].item[i].pubDate[0],
          author: this.RssData?.rss.channel[0].item[i].author[0],
          media: {
            type: this.RssData?.rss.channel[0].item[i]['media:content'][0].$.type,
            url: this.RssData?.rss.channel[0].item[i]['media:content'][0].$.url
          },
        });
      }
    }
  }
}
export interface IRssData {}
