import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Produit} from "../produit";
import {ProduitService} from "../produit.service";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: string;
  produit: any;
  produits: any;
  categories: any;
  form!: FormGroup;
  file: any;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  UploadImage(event: any) {
    this.file = event.target.files[0];
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['produitId'];
    console.log(this.id);
    if (this.id) {
      this.produitService.find(this.id).subscribe((data: Produit) => {
        this.produit = data;
        this.produits = this.produit.existingProduit;
        console.log(data);
        this.f['Nom'].setValue(this.produits.Nom);
        this.f['Prix'].setValue(this.produits.Prix);
        this.f['Cateforie'].setValue(this.produits.categorie);


      });

    }

    this.produitService.getCat().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    })

    this.form = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Prix: new FormControl('', Validators.required),

      Categorie: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Updated it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('Image', this.file, this.file.name);
        formData.append('Nom', this.form.get('Nom')?.value)
        formData.append('Prix', this.form.get('Prix')?.value);
        formData.append('categorie', this.form.get('categorie')?.value);

        this.produitService.create(formData).subscribe((res: any) => {
          this.router.navigateByUrl('produit/index');
        })
        Swal.fire(
          'Updated!',
          'Your file has been Updated.',
          'success'
        )
      }
    })

  }
}


