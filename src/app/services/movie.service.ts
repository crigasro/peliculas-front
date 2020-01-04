import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Endpoint de busqueda de peliculas
  searchURL = "http://localhost:8080/search?chain="

  // Endpoint para obtener detalles
  detailURL = "http://localhost:8080/getById?id="
  specifyDetail = "&detail="

  // Authorization hearder (para JWT).
  // Como en el backend esta mockeado, le pasamos directamente el token.
  authHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSJ9LCJpYXQiOjE1NzcyMTAzNzl9.y0IU2XkHefvwYQCyV8WQWVcRnHNRIHiHfCJ75jRVi6o"
  })

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<any> {
    let url =  this.searchURL + title;
    return this.http.get(url);
  }

  // Obtener detalles de una pelicula concreta

  getMovieTitle(id: number): Observable<any> {
    let url =  this.detailURL + id + this.specifyDetail + "title";
    return this.http.get(url);
  }

  getMovieDescription(id: number): Observable<any> {
    let url =  this.detailURL + id + this.specifyDetail + "description";
    return this.http.get(url);
  }

  getMovieCast(id: number): Observable<any> {
    let url =  this.detailURL + id + this.specifyDetail + "cast";
    return this.http.get(url);
  }

  getMoviePoster(id: number): Observable<any> {
    let url =  this.detailURL + id + this.specifyDetail + "poster";
    return this.http.get(url);
  }
}
