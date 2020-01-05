import { Component, OnInit } from '@angular/core';
import { MovieService, MovieDetail } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  title = null;
  cast = null;
  description = null;
  poster = null;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    
    this.movieService.getMovieDetail(id, MovieDetail.title).subscribe(
      res => { this.title = res.title; },
      err => { console.log("Error while getting movie title: ", err); }
    );

    this.movieService.getMovieDetail(id, MovieDetail.cast).subscribe(
      res => { this.cast = res.cast; },
      err => { console.log("Error while getting movie cast: ", err); }
    );

    this.movieService.getMovieDetail(id, MovieDetail.description).subscribe(
      res => { this.description = res.description; },
      err => { console.log("Error while getting movie description: ", err); }
    );

    this.movieService.getMovieDetail(id, MovieDetail.poster).subscribe(
      res => { this.poster = res.poster; },
      err => { console.log("Error while getting movie poster: ", err); }
    );

  }

}
