import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent {
  constructor(private route: Router, private serv: ProductService) {}
  categorytList: any;
  productList: any;
  ngOnInit(): void {
    this.getAllCategory();
  }

  // getProductById(id: any) {
  //   this.serv.getArticles(id).subscribe((result) => {
  //     this.productList = result.data;
  //     console.log(this.productList);
  //   });
  // }
  getAllCategory() {
    this.serv.getAllCategory().subscribe((result) => {
      this.categorytList = result.data;
      // console.log(this.categorytList);
    });
  }
}
