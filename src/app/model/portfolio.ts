export interface Portfolio {
  name: string;
  allocation: number;
  type: string;
  riskProfile: string;
  profitabilityDay: number;
  profitabilityMonth: number;
  profitability12Months: number;
  profitabilityTotal: number;
  benchmarkName: string;
  profitabilityBenchmark: number;
}
