import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

    // Doughnut
    @Input() doughnutChartLabels: string[] = [];
    @Input() doughnutChartData: number[] = [];
    @Input() doughnutChartType: string = '';

    @Input() leyenda: string = '';

  constructor() { }

  ngOnInit() {
  }

}
