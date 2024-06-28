import { Injectable } from '@angular/core';
import { Portfolio } from '../../model/portfolio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly portfolioCompositionURL = 'http://localhost:3000/portfolioComposition';

  constructor(private httpClient: HttpClient) { }

  getPortfolio(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(this.portfolioCompositionURL);
  }
}
