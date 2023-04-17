import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  productDetail: any;
  id: any;
  constructor(private route: ActivatedRoute, private serv: ProductService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductById(this.id);
  }
  getProductById(id: any) {
    this.serv.getProductDetails(id).subscribe((result) => {
      this.productDetail = result;
      console.log(this.productDetail);
    });
    this.productDetail = this.serv.getProductDetails(id);
  }
}
