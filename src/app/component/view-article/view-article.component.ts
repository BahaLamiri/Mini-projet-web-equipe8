import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
})
export class ViewArticleComponent {
  productList: any;
  nomcat: any;
  id: any;
  constructor(private serv: ProductService, private activeR: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.activeR.snapshot.paramMap.get('id');
    this.getProductById(this.id);
  }
  getProductById(id: any) {
    this.serv.getArticles(id).subscribe((result) => {
      this.productList = result.data;
      this.nomcat = result.nomcat;

      console.log(this.productList);
    });
  }
}
