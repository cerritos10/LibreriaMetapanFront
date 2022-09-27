import { GraphicsService } from './../../services/graphics.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  mas = null;
  totalCompras = null;

  public canvas: any;
  public canvas2: any;
  public ctx;
  public myChartDataMas;
  public myChartDataMenos;

  constructor(private restService: GraphicsService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    // var path = 'grafStock/menos'
    // this.restService.Stock(path).subscribe(data => {
    //   this.mas = data['data'];
    //   console.log(data);
    // });
    this.graficaStock('grafStock/mas','grafStockMas');
    this.graficaStock('grafStock/menos','grafStockMenos');
    this.grafTotalCompras('grafTotalCompras/')
    // this.grafColors();
  }

  grafTotalCompras(path){
    var currentTime = new Date();
    var year = currentTime.getFullYear()
    this.restService.totalCompras(path, year).subscribe(data => {
      this.totalCompras = data['data'];
      console.log(data);
    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
    };

    this.canvas = document.getElementById('grafTotalCompras');
    this.ctx = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    
    gradientStroke.addColorStop(1, 'rgba(255, 99, 132,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(255, 99, 132,0.0)');
    gradientStroke.addColorStop(0, 'rgba(255, 99, 132,0)'); //blue colors

      var labels = data['data'].map(function (e) {
        if(e.mes === 1){  
          return 'Enero'
        }else if(e.mes === 2){
          return 'Febrero'
        }else if(e.mes === 3){
          return 'Marzo'
        }else if(e.mes === 4){
          return 'Abril'
        }else if(e.mes === 5){
          return 'Mayo'
        }else if(e.mes === 6){
          return 'Junio'
        }else if(e.mes === 7){
          return 'Julio'
        }else if(e.mes === 8){
          return 'Agosto'
        }else if(e.mes === 9){
          return 'Septiembre'
        }else if(e.mes === 10){
          return 'Octubre'
        }else if(e.mes === 11){
          return 'Noviembre'
        }else if(e.mes === 12){
          return 'Diciembre'
        }
        return e.mes;
      });

      var cant = data['data'].map(function (e) {
        return e.totalanio ;
      });

      this.myChartDataMas = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Total de Compras',
            data: cant,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: gradientBarChartConfiguration
      });
    });
  }

  grafColors(){
    this.canvas = document.getElementById('grafColors');
    this.ctx = this.canvas.getContext("2d");
    const myChart = new Chart(this.ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
  }

  graficaStock(path, elementID ) {
    this.restService.Stock(path).subscribe(data => {
      this.mas = data['data'];
      console.log(data);
    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
    };

    this.canvas = document.getElementById(elementID);
    this.ctx = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

      var labels = data['data'].map(function (e) {
        return e.nombre_producto + ' ' + e.descripcion;
      });

      var cant = data['data'].map(function (e) {
        return e.stock;
      });

      this.myChartDataMas = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Productos',
            data: cant,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#1f8ef1',
            borderWidth: 1
          }]
        },
        options: gradientBarChartConfiguration
      });
    });
  }
}
