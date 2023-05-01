import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-souris',
  templateUrl: './souris.component.html',
  styleUrls: ['./souris.component.css'],
})
export class SourisComponent {
  productList: any;
  constructor(private route: Router, private serv: ProductService) {}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.serv.getAllProduct().subscribe((result) => {
      this.productList = result.data;
      console.log(this.productList);
    });
  }
}
