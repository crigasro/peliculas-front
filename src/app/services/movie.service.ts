import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Enumerador de tipos de detalles
export enum MovieDetail {
  title = "title",
  description = "description",
  cast = "cast",
  poster = "poster"
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseURL = "http://localhost:8080"

  // Authorization hearder (para JWT).
  // Como en el backend esta mockeado, le pasamos directamente el token.
  authHeaders = {
    headers: new HttpHeaders()
      .set('Authorization',  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJlbWFpbCI6ImpvaG5AZG9lLmNvbSJ9LCJpYXQiOjE1NzcyMTAzNzl9.y0IU2XkHefvwYQCyV8WQWVcRnHNRIHiHfCJ75jRVi6o")
  }

  constructor(private http: HttpClient) { }

  // Obtener listado de peliculas segun una busqueda
  searchMovies(title: string): Observable<any> {
    let query = `/search?chain=${title}`
    let url =  this.baseURL + query;
    return this.http.get(url, this.authHeaders);
  }

  // Obtener un detalle de una pelicula concreta
  getMovieDetail(id: number, detail: string): Observable<any> {
    let query = `/getById?id=${id}&detail=${detail}`;
    let url =  this.baseURL + query;
    return this.http.get(url, this.authHeaders);
  }
}
