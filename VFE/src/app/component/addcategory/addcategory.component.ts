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
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'],
})
export class AddcategoryComponent {
  constructor(
    private http: HttpClient,
    private build: FormBuilder,
    private serv: ProductService,
    private route: Router
  ) {}

  idcategorie: any;
  nomcategorie: any;

  ngOnInit(): void {}
  addCategorie(categorie: any) {
    this.serv.createCategorie(categorie).subscribe(
      (data) => {
        Swal.fire({
          title: 'Categorie Ajouté ',
          icon: 'success',
        });
        this.ngOnInit();
        this.route.navigate([""])
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
