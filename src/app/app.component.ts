import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-project';
  constructor(private router: Router) { }
  HomeClick(){
    this.router.navigate(['produit/index']);
  }
  CommandeList(){
    this.router.navigate(['commande/list']);
  }
}
