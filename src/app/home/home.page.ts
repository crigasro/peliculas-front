import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  results: Observable<any>;
  searchChain: string;

  constructor(private movieService: MovieService) {}

  search(event) {
    this.results = this.movieService.searchMovies(this.searchChain);
    // this.results.subscribe(
    //   res => {},
    //   err => {}
    // )
  }
}
