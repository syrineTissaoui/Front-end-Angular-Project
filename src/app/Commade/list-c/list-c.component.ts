import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import {CommandeService} from "../commande.service";
@Component({
  selector: 'app-list-c',
  templateUrl: './list-c.component.html',
  styleUrls: ['./list-c.component.scss']
})
export class ListCComponent implements OnInit {

  constructor(public commandesService:CommandeService) { }
  Commandes: any;
  ngOnInit(): void {
    this.commandesService.getAll().subscribe((data)=>{
      this.Commandes = data;
      console.log(this.Commandes);
    })

  }
  deleteCommande(id:string){


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
        this.commandesService.delete(id).subscribe();
        Swal.fire(
          'Deleted!',
          'Your Commandes has been deleted.',
          'success'
        )
      }
    })




  }

}




