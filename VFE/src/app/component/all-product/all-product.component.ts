import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent {
  productList: any;
  show: any;
  constructor(private route: Router, private serv: ProductService) {}
  ngOnInit(): void {
    this.show = false;
    this.getProduct();
  }
  getProduct() {
    this.serv.getAllProduct().subscribe((result) => {
      this.productList = result.data;
      console.log(this.productList);
    });
  }
  delete(id: any) {
    Swal.fire({
      // title: 'Are you sure?',
      // title: 'Are you sure?',
      text: 'Êtes-vous certain de vouloir supprimer cet article ? Veuillez confirmer votre choix  ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmer',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serv.delete(id).subscribe((result) => {
          this.ngOnInit();
        });
        Swal.fire('Produit Supprimé', '', 'success');
      }
    });
  }
}
