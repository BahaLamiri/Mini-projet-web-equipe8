import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  articles: any;

  public getAllProduct() {
    let myData = this.http.get<any>(
      'http://localhost/php_rest/api/post/readAllProduct.php'
    );
    return myData;
  }

  public getArticles(id: any) {
    let myData = this.http.get<any>(
      'http://localhost/php_rest/api/post/readArticles.php?id=' + id
    );
    return myData;
  }
  public getProductDetails(id: any) {
    let myData = this.http.get<any>(
      'http://localhost/php_rest/api/post/readProductById.php?id=' + id
    );
    return myData;
  }

  public getAllCategory() {
    let myData = this.http.get<any>(
      'http://localhost/php_rest/api/post/readAllCategorie.php'
    );
    return myData;
  }
  public getSingleProduct(id: any) {
    let myData = this.http.get<any>(
      'http://localhost/php_rest/api/post/readSingleProduct.php?id=' + id
    );
    return myData;
  }
  public createProduct(product: any) {
    return this.http.post(
      'http://localhost/php_rest/api/post/createProd.php',
      product
    );
  }
  public createCategorie(categorie: any) {
    return this.http.post(
      'http://localhost/php_rest/api/post/createCategorie.php',
      categorie
    );
  }

  public delete(id: any) {
    return this.http.delete(
      'http://localhost/php_rest/api/post/delete.php?id=' + id
    );
  }
  public editProduct(product: any, id: any) {
    return this.http.put(
      'http://localhost/php_rest/api/post/update.php?id=' + id,
      product
    );
  }
}
