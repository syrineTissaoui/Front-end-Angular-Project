import { Component, OnInit } from '@angular/core';
import {CommandeService} from "../commande.service";
import {Commande} from "../Commande";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-c',
  templateUrl: './view-c.component.html',
  styleUrls: ['./view-c.component.scss']
})
export class ViewCComponent implements OnInit {
  id!: string;
  commande: any;
  commandes:any;
  constructor(
    public commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['commandeId'];

    this.commandeService.find(this.id).subscribe((data: Commande)=>{
      this.commande = data;
      this.commandes=this.commande.existingcommande;
    });
  }

}


