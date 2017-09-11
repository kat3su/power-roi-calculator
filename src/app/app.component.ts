import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  powerProducts = [
    new PowerProduct('Product Bundle #1', 100),
    new PowerProduct('Product Bundle #2', 200),
    new PowerProduct('Product Bundle #3', 300),
  ];
  selectedProduct: PowerProduct;
  employeeCount: number;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'bar';
  barChartLegend = true;

  barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  selectProduct(productIndex) {
    console.log(productIndex);
    this.selectedProduct = this.powerProducts[productIndex];
  }
  doCalculation() {
    console.log(this.selectedProduct);
    console.log(this.employeeCount);
  }
}

class PowerProduct {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
