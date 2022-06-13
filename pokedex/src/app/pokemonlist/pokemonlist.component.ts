import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

  pokemonlist: Pokemon[] = [];

  constructor(private ps: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.ps.getPokemons().subscribe( data => {
      this.pokemonlist = data;
    });
  }
}
