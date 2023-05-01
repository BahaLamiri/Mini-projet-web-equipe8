import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './component/all-product/all-product.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { DetailsComponent } from './component/details/details.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SourisComponent } from './component/souris/souris.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { AddcategoryComponent } from './component/addcategory/addcategory.component';
import { ViewArticleComponent } from './component/view-article/view-article.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'souris', component: SourisComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'allProduct', component: AllProductComponent },
  { path: 'createProduct', component: CreateproductComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  {path:'article/:id',component:ViewArticleComponent},
  { path: '**', component: CategorieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
