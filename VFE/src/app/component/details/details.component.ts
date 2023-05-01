import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/serviecs/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  productDetail: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private serv: ProductService,
    private r: Router
  ) {}
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
  delete(id: any) {
    Swal.fire({
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
        this.r.navigate(['allProduct']);
      }
    });
  }
}
