import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
    public pokemon: Pokemon;

    constructor(private activatedRoute: ActivatedRoute, private ps: PokemonService, private router: Router) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(
            (route: ParamMap) => {
                this.ps.getPokemon(route.get('id'))
                    .subscribe(data => {
                        this.pokemon = data;
                    })
            }
        );
    }
    toHome() {
        this.router.navigateByUrl('home');
    }
}
