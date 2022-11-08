import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produit } from './produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiURL = "http://localhost:3000";
  link = this.apiURL+ `/produit`;
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  // UploadImage(file: any): Observable<any>{
  //   console.log(file.name)
  //   return  this.httpClient.post(this.apiURL + '/produit/upload',file)
  // }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/produit/')

      .pipe(
        catchError(this.errorHandler)
      )
  }
  getCat(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/categorie/')

      .pipe(
        catchError(this.errorHandler)
      )
  }


  /**
   * Write code on Method
   *
   * @return response()
   */
  create(produit:FormData): Observable<any> {
    console.log('url', this.apiURL + '/produit');
    console.log('produit',produit);



    return this.httpClient.post(this.apiURL + '/produit',produit)

      // .pipe(
      //   catchError(this.errorHandler)
      // )

  }


  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/produit/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:string, produit:Produit): Observable<any> {

    return this.httpClient.put(this.apiURL + '/produit/' + id ,JSON.stringify(produit), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/produit/' + id, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
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
