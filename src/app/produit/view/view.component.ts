import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Produit} from "../produit";
import {ProduitService} from "../produit.service";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: string;
  produit:any ;
  produits:any;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['produitId'];

    if(this.id){
    this.produitService.find(this.id).subscribe((data: Produit)=>{
      this.produit = data;
      this.produits=this.produit.existingProduit;

      console.log(this.produit)
    });
  }}

}
