import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(search: string): Observable<Movie[]>{
    return this.http.get<Movie[]>('https://www.omdbapi.com/?s=' + search + '&apikey=3130abae')
      .pipe(map(data =>{
        let list: Movie[] = [];
        for(let x in data['Search']) {
          let movie = new Movie(data['Search'][x]['Title'],data['Search'][x]['Year'],data['Search'][x]['Poster']);
          list.push(movie);
        }
        return list;
      })
    );
  }
  getDetail(title): Observable<Movie>{
    return this.http.get<Movie>('https://www.omdbapi.com/?t=' + title + '&apikey=3130abae')
      .pipe(map(data => {
        let movie = new Movie(data['Title'], data['Year'], data['Poster'], data['Plot']);
        return movie;
      })
    );
  }
}
