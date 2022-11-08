import {Component, OnInit, ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {CommandeService} from "../commande.service";


@Component({
  selector: 'app-create-c',
  templateUrl: './create-c.component.html',
  styleUrls: ['./create-c.component.scss']
})
export class CreateCComponent implements OnInit {
  @ViewChild('fileInput') fileinput:any;
  form!: FormGroup;
  produits :any;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public commandeService: CommandeService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({

      produit: new FormControl('', [Validators.required]),
    });
    this.commandeService.getProduit().subscribe((data)=>{
      this.produits = data;
      console.log(this.produits);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);


    this.commandeService.create(this.form.value).subscribe((res:any) => {
      console.log('Commande created successfully!');
      this.router.navigateByUrl('commande/list');
    })
  }

}
