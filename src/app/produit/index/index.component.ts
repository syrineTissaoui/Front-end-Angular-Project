import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";
import {ProduitService} from "../produit.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  categorie: any;
  produits: any;
  // produit:Produit[]=[];


  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public produitService: ProduitService) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.produitService.getAll().subscribe((data) => {
      this.produits = data;
      console.log(this.produits);
    })


  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProduit(id: string) {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produitService.delete(id).subscribe();
        Swal.fire(
          'Deleted!',
          'Your Product has been deleted.',
          'success'
        )
      }
    })


  }
}
