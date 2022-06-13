import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) { }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?limit=151')
            .pipe(map(data => {
                let pokemonlist: Pokemon[] = [];
                for (let x in data['results']) {
                    let pokemon = new Pokemon(data['results'][x]['name'], data['results'][x]['url'].substr(34).slice(0, -1));
                    pokemonlist.push(pokemon);
                }
                return pokemonlist;
            })
            );
    }
    getPokemon(id: string): Observable<Pokemon> {
        return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id);
    }
}
