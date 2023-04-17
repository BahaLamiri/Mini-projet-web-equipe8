import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent {
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
  delete(id: any) {
    this.serv.delete(id).subscribe((result) => {
      alert('Product Deleted ');
    });
  }
}
