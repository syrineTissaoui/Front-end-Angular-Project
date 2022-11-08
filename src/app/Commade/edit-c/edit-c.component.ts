import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommandeService} from "../commande.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Commande} from "../Commande";
import {Produit} from "../../produit/produit";
@Component({
  selector: 'app-edit-c',
  templateUrl: './edit-c.component.html',
  styleUrls: ['./edit-c.component.scss']
})
export class EditCComponent implements OnInit {
  id!: string;
  commande!: any;
  commandes!:any;
  produits: any;
  form!: FormGroup;


  constructor(
    public commandeService:CommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['commandeId'];
    console.log(this.id);
    if(this.id){
      this.commandeService.find(this.id).subscribe((data: Commande)=>{
        this.commande=data;

        console.log(data);






      });

    }



    this.form = new FormGroup({
      etat: new FormControl('', [Validators.required]),

    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
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
        this.commandeService.update(this.id, this.form.value).subscribe((res:any) => {
          console.log('Commande updated successfully!');
          this.router.navigateByUrl('commande/list');
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




