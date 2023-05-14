import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent {
  constructor(
    private http: HttpClient,
    private build: FormBuilder,
    private serv: ProductService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}
  details: any;
  id: any;
  idproduit: any;
  nomproduit: any;
  categorie: any;
  prix: any;
  description: any;
  img: any;
  stock: any;
  disponibilite: any;
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');

    this.serv.getProductDetails(this.id).subscribe((data) => {
      this.details = data;
    });
  }

  editProduct(product: any) {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(product, id);
    this.serv.editProduct(product, id).subscribe((data) => {
      Swal.fire({
        text: 'Êtes-vous certain de vouloir modifier cet article ? Veuillez confirmer votre choix  ?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmer',
      }).then((result) => {
        if (result.isConfirmed) {
          this.serv.editProduct(product, id).subscribe((data) => {
            this.ngOnInit();
          });
          Swal.fire('Produit modifié', '', 'success');
        }
      });
    });
  }
}
