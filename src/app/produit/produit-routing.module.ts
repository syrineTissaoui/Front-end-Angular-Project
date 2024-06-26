import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'produit/index', pathMatch: 'full'},
  { path: 'produit/index', component: IndexComponent },
  { path: 'produit/:produitId/view', component: ViewComponent },
  { path: 'produit/create', component: CreateComponent },
  { path: 'produit/:produitId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
