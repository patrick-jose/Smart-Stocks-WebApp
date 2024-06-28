import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PortfolioService } from '../shared/services/portfolio.service';
import { Portfolio } from '../model/portfolio';
import { HttpClient } from '@angular/common/http';
import { DataChart } from '../model/dataChart';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-area',
  standalone: true,
  imports: [ MatTableModule, MatCardModule, CommonModule ],
  templateUrl: './customer-area.component.html',
  styleUrl: './customer-area.component.scss'
})
export class CustomerAreaComponent implements AfterViewInit {

  displayedColumnsSummary: string[] =
  [
    'allocation',
    'name',
    'type',
    'riskProfile',
    'benchmarkName'
  ];

  displayedColumnsFull: string[] =
  [
    'allocation',
    'name',
    'type',
    'riskProfile',
    'benchmarkName',
    'profitabilityBenchmark',
    'profitabilityDay',
    'profitabilityMonth',
    'profitability12Months',
    'profitabilityTotal',

  ];

  portfolioComposition: Portfolio[] = [];

  dataChart: DataChart;

  chart: any = [];

  constructor(private portfolioService: PortfolioService) {
    this.portfolioService.getPortfolio().subscribe(result => this.portfolioComposition = result);

    this.dataChart = this.calculateAllocationsByType(this.portfolioComposition);

    this.chart = new Chart(document.getElementById('canvas'), {
      type: 'pie',
      data: this.dataChart,
    })
  }
  ngAfterViewInit(): void {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.dataChart,
    })
  }

  calculateAllocationsByType(portfolio: Portfolio[]): DataChart {
    const allocationByType: { [key: string]: number } = {};

    portfolio.forEach((investment) => {
      if (allocationByType[investment.type]) {
        allocationByType[investment.type] += investment.allocation;
      } else {
        allocationByType[investment.type] = investment.allocation;
      }
    });

    const labels = Object.keys(allocationByType);
    const data = Object.values(allocationByType);

    const dataChart: DataChart = {
      labels: labels,
      datasets: [{
        label: 'Carteira',
        data: data,
        backgroundColor: [
          '#004f4f',
          'rgb(99, 205, 224)',
          'midnightblue',
          'rgb(79, 148, 232)',
          'rgb(224, 228, 212)',
          'rgb(91, 152, 154)'
        ],
        hoverOffset: 6
      }]
    };
    return dataChart;
  }
}
