import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],
})
export class CreateproductComponent {
  form!: FormGroup;
  constructor(
    private http: HttpClient,
    private build: FormBuilder,
    private serv: ProductService
  ) {}

  ngOnInit(): void {
    this.form = this.build.group({
      idproduit: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      nomproduit: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: ['', [Validators.required]],
      disponibilite: ['', [Validators.required]],
      stock: ['', [Validators.required]],
    });
  }
  // addProduct(product: any) {
  //   const model = this.form.value;
  //   // this.serv.createProduct(model).subscribe((result) => {
  //   //   alert('Succes');
  //   // });
  //   console.log(product);
  // }
  addProduct(product: any) {
    console.log(product);
    this.serv.createProduct(product).subscribe((data) => {
      console.log(data);
    });
  }
}
