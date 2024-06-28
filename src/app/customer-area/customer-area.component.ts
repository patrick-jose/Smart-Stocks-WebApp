import { AfterViewInit, Component, Inject, NgZone } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PortfolioService } from '../shared/services/portfolio.service';
import { Portfolio } from '../model/portfolio';
import { DataChart } from '../model/dataChart';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-customer-area',
  standalone: true,
  imports: [ MatTableModule, MatCardModule, CommonModule ],
  templateUrl: './customer-area.component.html',
  styleUrls: ['./customer-area.component.scss']
})
export class CustomerAreaComponent implements AfterViewInit {

  displayedColumnsSummary: string[] = [
    'allocation',
    'name',
    'type',
    'riskProfile',
    'benchmarkName'
  ];

  displayedColumnsFull: string[] = [
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
  dataChart: any;
  chart: any = [];

  constructor(private portfolioService: PortfolioService, private ngZone: NgZone, @Inject(DOCUMENT) private document: Document) {
    this.portfolioService.getPortfolio().subscribe(result => {
      this.portfolioComposition = result;
      if (this.portfolioComposition.length > 0) {
        this.dataChart = this.calculateAllocationsByType(this.portfolioComposition);

        // Run chart initialization inside Angular's zone
        this.ngZone.run(() => {
          this.initializeChart();
        });
      }
    });
  }

  ngAfterViewInit(): void {
    // Chart initialization is handled in the subscription callback now
  }

  initializeChart(): void {
    const canvas = this.document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element with id "canvas" not found.');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context from canvas element.');
      return;
    }

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.dataChart,
    });
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
