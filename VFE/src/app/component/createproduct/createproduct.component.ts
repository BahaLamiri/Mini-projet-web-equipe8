import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],
})
export class CreateproductComponent {
  constructor(
    private http: HttpClient,
    private build: FormBuilder,
    private serv: ProductService,
    private route: Router
  ) {}

  idproduit: any;
  nom: any;
  cat: any;
  prix: any;
  desc: any;
  img: any;
  stock: any;
  disponibilite: any;
  idPattern = '[p]{1}[0-9]+';
  ngOnInit(): void {}
  addProduct(product: any) {
    console.log(product);

    this.serv.createProduct(product).subscribe(
      (data) => {
        Swal.fire({
          title: 'Produit Ajouté',
          icon: 'success',
        });
      },
      (err) => {
        Swal.fire({
          title: 'Verifier vos données !',
          icon: 'error',
        });
      }
    );
  }
}
