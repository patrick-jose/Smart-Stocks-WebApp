import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Portfolio } from '../model/portfolio';

const ELEMENT_DATA: Portfolio[] = [
  {
    allocation: 30,
    name: 'TESOURO DIRETO SELIC 2025',
    profitabilityDay: 1.0005,
    profitabilityMonth: 0.8,
    type: 'Renda Fixa',
    riskProfile: 'Conservador',
    profitability12Months: 6,
    profitabilityTotal: 18,
    benchmarkName: 'SELIC',
    profitabilityBenchmark: 0.2
  },
  {
    allocation: 40,
    name: 'CDB BANCO DO BRASIL 2024',
    profitabilityDay: 1.0010,
    profitabilityMonth: 1.0,
    type: 'Renda Fixa',
    riskProfile: 'Moderado',
    profitability12Months: 8,
    profitabilityTotal: 25,
    benchmarkName: 'CDI',
    profitabilityBenchmark: 0.4
  },
  {
    allocation: 2,
    name: 'AÇÕES PETROBRAS PN',
    profitabilityDay: 1.0100,
    profitabilityMonth: 3.0,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 30,
    profitabilityTotal: 90,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.2
  },
  {
    allocation: 2,
    name: 'AÇÕES VALE ON',
    profitabilityDay: 1.0085,
    profitabilityMonth: 2.7,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 25,
    profitabilityTotal: 75,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.1
  },
  {
    allocation: 2,
    name: 'AÇÕES MAGAZINE LUIZA ON',
    profitabilityDay: 1.0120,
    profitabilityMonth: 3.5,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 28,
    profitabilityTotal: 85,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.3
  },
  {
    allocation: 2,
    name: 'AÇÕES BRADESCO PN',
    profitabilityDay: 1.0090,
    profitabilityMonth: 2.9,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 22,
    profitabilityTotal: 65,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.1
  },
  {
    allocation: 2,
    name: 'AÇÕES ITAÚ UNIBANCO PN',
    profitabilityDay: 1.0075,
    profitabilityMonth: 2.6,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 20,
    profitabilityTotal: 60,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.0
  },
  {
    allocation: 2,
    name: 'AÇÕES B3 ON',
    profitabilityDay: 1.0065,
    profitabilityMonth: 2.3,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 18,
    profitabilityTotal: 55,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 0.9
  },
  {
    allocation: 2,
    name: 'AÇÕES AMBEV PN',
    profitabilityDay: 1.0080,
    profitabilityMonth: 2.8,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 23,
    profitabilityTotal: 68,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.0
  },
  {
    allocation: 2,
    name: 'AÇÕES LOJAS RENNER ON',
    profitabilityDay: 1.0070,
    profitabilityMonth: 2.5,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 19,
    profitabilityTotal: 58,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 0.9
  },
  {
    allocation: 2,
    name: 'AÇÕES WEG ON',
    profitabilityDay: 1.0095,
    profitabilityMonth: 3.2,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 26,
    profitabilityTotal: 78,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 1.1
  },
  {
    allocation: 2,
    name: 'AÇÕES CIELO ON',
    profitabilityDay: 1.0055,
    profitabilityMonth: 2.0,
    type: 'Ações',
    riskProfile: 'Agressivo',
    profitability12Months: 16,
    profitabilityTotal: 50,
    benchmarkName: 'IBOVESPA',
    profitabilityBenchmark: 0.8
  },
  {
    allocation: 3,
    name: 'FUNDO IMOBILIÁRIO XP MALLS',
    profitabilityDay: 1.0020,
    profitabilityMonth: 1.5,
    type: 'Fundo Imobiliário',
    riskProfile: 'Moderado',
    profitability12Months: 10,
    profitabilityTotal: 35,
    benchmarkName: 'IFIX',
    profitabilityBenchmark: 0.6
  },
  {
    allocation: 2,
    name: 'FII XP LOGÍSTICA',
    profitabilityDay: 1.0015,
    profitabilityMonth: 1.2,
    type: 'Fundo Imobiliário',
    riskProfile: 'Moderado',
    profitability12Months: 12,
    profitabilityTotal: 40,
    benchmarkName: 'IFIX',
    profitabilityBenchmark: 0.5
  },
  {
    allocation: 3,
    name: 'XP INVESTIMENTOS MULTIMERCADO',
    profitabilityDay: 1.0023,
    profitabilityMonth: 1.8,
    type: 'Fundo',
    riskProfile: 'Moderado',
    profitability12Months: 15,
    profitabilityTotal: 50,
    benchmarkName: 'CDI',
    profitabilityBenchmark: 0.5
  },
  {
    allocation: 2,
    name: 'ITAÚ INDEX BITCOIN USD FIC FIA',
    profitabilityDay: 1.0079,
    profitabilityMonth: 2.4,
    type: 'Fundo',
    riskProfile: 'Agressivo',
    profitability12Months: 20,
    profitabilityTotal: 70,
    benchmarkName: '',
    profitabilityBenchmark: 0
  }
];

@Component({
  selector: 'app-customer-area',
  standalone: true,
  imports: [ MatTableModule, MatCardModule ],
  templateUrl: './customer-area.component.html',
  styleUrl: './customer-area.component.scss'
})
export class CustomerAreaComponent implements OnInit {

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
  dataSource = ELEMENT_DATA;

  chart: any = [];

  dataChart: any = {
    labels: [
      'Fundos',
      'Cripto',
      'Ações',
      'Fundos Imobiliários',
      'Títulos Públicos',
      'Capital Privado'
    ],
    datasets: [{
      label: 'Carteira',
      data: [3, 2, 20, 5, 30, 40],  // Baseado nas novas alocações
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


  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: this.dataChart,
    });
  }
}
