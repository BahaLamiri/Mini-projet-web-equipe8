import { NgModule } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SourisComponent } from './component/souris/souris.component';
import { CategorieComponent } from './component/categorie/categorie.component';
import { DetailsComponent } from './component/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './component/all-product/all-product.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { AddcategoryComponent } from './component/addcategory/addcategory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewArticleComponent } from './component/view-article/view-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SourisComponent,
    CategorieComponent,
    DetailsComponent,
    AllProductComponent,
    CreateproductComponent,
    EditproductComponent,
    AddcategoryComponent,
    ViewArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
