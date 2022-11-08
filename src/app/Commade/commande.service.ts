import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Commande} from "./Commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiURL = "http://localhost:3000";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }



  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/commande/')

      .pipe(
        catchError(this.errorHandler)
      )
  }


  getProduit(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/produit/')

      .pipe(
        catchError(this.errorHandler)
      )
  }


  create(commande:Commande): Observable<any> {
    console.log(commande);
    return this.httpClient.post(this.apiURL + '/commande/', JSON.stringify(commande),  this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }





  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/commande/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id:string, commande:Commande): Observable<any> {

    return this.httpClient.put(this.apiURL + '/commande/' + id,  JSON.stringify(commande), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/commande/' + id, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
