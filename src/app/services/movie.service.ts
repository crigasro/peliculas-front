import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseURL = "http://localhost:8080"

  searchChainParam = "/search?chain="

  // Authorization hearder (para JWT).
  // Como en el backend esta mockeado, le pasamos directamente el token.
  authHeaders = {
    headers: new HttpHeaders()
      .set('Authorization',  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSJ9LCJpYXQiOjE1NzcyMTAzNzl9.y0IU2XkHefvwYQCyV8WQWVcRnHNRIHiHfCJ75jRVi6o")
  }
  // new Headers({
  //   'Content-Type': 'application/json',
  //   'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSJ9LCJpYXQiOjE1NzcyMTAzNzl9.y0IU2XkHefvwYQCyV8WQWVcRnHNRIHiHfCJ75jRVi6o"
  // })

  constructor(private http: HttpClient) { }

  /*** Obtener listado de peliculas segun una busqueda ***/
  searchMovies(title: string): Observable<any> {
    let url =  this.baseURL + this.searchChainParam + title;
    console.log("Request url: " + url);
    return this.http.get(url, this.authHeaders).pipe(
      map(movies => {
        console.log("Entero: " + movies);
        return movies['title'];
      })
    );
  }

  /*** Obtener detalles de una pelicula concreta ***/

  getMovieTitle(id: number): Observable<any> {
    let query = `/getById?id=${id}&detail=title`;
    let params = {
      id: id,
      detail: "title"
    }
    let url =  this.baseURL + query;
    return this.http.get(url, this.authHeaders);
  }

  // getMovieDescription(id: number): Observable<any> {
  //   let url =  this.detailURL + id + this.specifyDetail + "description";
  //   return this.http.get(url, this.authHeaders);
  // }

  // getMovieCast(id: number): Observable<any> {
  //   let url =  this.detailURL + id + this.specifyDetail + "cast";
  //   return this.http.get(url, this.authHeaders);
  // }

  // getMoviePoster(id: number): Observable<any> {
  //   let url =  this.detailURL + id + this.specifyDetail + "poster";
  //   return this.http.get(url, this.authHeaders);
  // }
}
