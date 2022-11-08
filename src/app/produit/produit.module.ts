import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProduitRoutingModule} from "./produit-routing.module";

import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,

  ]
})
export class ProduitModule { }
