import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewCComponent} from "./view-c/view-c.component";
import {CreateCComponent} from "./create-c/create-c.component";
import {EditCComponent} from "./edit-c/edit-c.component";
import {ListCComponent} from "./list-c/list-c.component";


const routes: Routes = [
  { path: '', redirectTo: 'commande/list', pathMatch: 'full'},
  { path: 'commande/list', component: ListCComponent },
  { path: 'commande/:commandeId/view', component: ViewCComponent },
  { path: 'commande/create', component: CreateCComponent },
  { path: 'commande/:commandeId/edit', component: EditCComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
