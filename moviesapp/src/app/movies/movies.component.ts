import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  movie: Movie[] = [];
  plot: string = "";
  show: boolean = false;

  constructor(private ms: MoviesService) { }

  showMovies(search: string) {
    this.ms.getMovies(search).subscribe( data => { 
      this.movies = data;
      this.show = false;
    });
  }

  getDetail(title) {
    this.ms.getDetail(title.title).subscribe(data => { 
      this.plot = data.plot
      this.movie = title;
      this.show = true;
    });
  }

  ngOnInit(): void {
    console.log(this.movies.length);
  }
}