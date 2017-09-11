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
