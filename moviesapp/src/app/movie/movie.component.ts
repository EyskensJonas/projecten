import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  @Input() movie: Movie;
  @Input() plot: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.plot);
  }

}
