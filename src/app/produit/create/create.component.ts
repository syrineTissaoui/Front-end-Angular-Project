import {Component, OnInit, ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ProduitService} from "../produit.service";
import {Produit} from "../produit";
import Swal from "sweetalert2";
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/produit';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  produit!: Produit;
  form!: FormGroup;
  categories: any;
  file: any;
  FileItem: any;
  Image: any;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });

  constructor(
    public produitService: ProduitService,
    private router: Router
  ) {
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      console.log('File successfully uploaded!');
    };



    this.form = new FormGroup({
      Nom: new FormControl('', [Validators.required]),
      Prix: new FormControl('', Validators.required),
      DateExp: new FormControl('', Validators.required),
      Image: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required]),
    });

    this.produitService.getCat().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    })
  }
// onFileSelected () {
//   this.uploader.uploadAll();
// }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }
//
//   UploadImage(event: any){
//   this.file = event.target.files[0];
// }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    if (this.form.invalid) {
      return
    }
    const formData = new FormData();
    formData.append('Image', this.FileItem.file,this.FileItem.file.name)
    formData.append('Nom', this.form.get('Nom')?.value)
    formData.append('Prix', this.form.get('Prix')?.value);
    formData.append('categorie', this.form.get('categorie')?.value);
    formData.append('DateExp', this.form.get('DateExp')?.value);
    this.produitService.create(this.form.value).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
    //  const formData = new FormData();
    //
    // formData.append('Nom', this.form.get('Nom')?.value)
    // formData.append('Prix', this.form.get('Prix')?.value);
    // formData.append('categorie', this.form.get('categorie')?.value);
    // formData.append('DateExp', this.form.get('DateExp')?.value);
    // this.produitService.create(formData).subscribe((res: any) => {
    //   this.router.navigateByUrl('produit/index');
    //   Swal.fire(
    //     'Good job!',
    //     'Product Add!',
    //     'success'
    //   )
    // })


  }

  // addProduct(productFormData:FormData) {
  //
  //   this.produitService.create(this.form.value).subscribe((res: any) => {
  //     this.router.navigateByUrl('produit/index');
  //     Swal.fire(
  //       'Good job!',
  //       'Product Add!',
  //       'success'
  //     )
  //   })
  //
  //
  // }}
}
