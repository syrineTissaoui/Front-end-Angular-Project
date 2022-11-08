import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "../app.component";
import {CreateCComponent} from "./create-c/create-c.component";
import {EditCComponent} from "./edit-c/edit-c.component";
import {ListCComponent} from "./list-c/list-c.component";
import { ViewCComponent } from './view-c/view-c.component';
import {CommandeRoutingModule} from "./commande-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateCComponent,
    EditCComponent,
    ListCComponent,
    ViewCComponent],
    imports: [
        CommonModule,
        CommandeRoutingModule,
        ReactiveFormsModule
    ]
})
export class CommandeModule { }
