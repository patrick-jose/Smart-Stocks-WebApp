export interface DataChart {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }>;
};
