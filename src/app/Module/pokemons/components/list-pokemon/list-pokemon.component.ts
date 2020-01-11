 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';

 import { PokemonsService } from "./../../services/pokemons.service";
 import { Pokemon } from "../../../../model/Pokemon";
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  private pokemons : Pokemon[];
  private value : string="" ;
  constructor(private router: Router, private pokemonsService : PokemonsService) { }
  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(
      pokemons => this.pokemons = pokemons
    );

  }

  selectPokemon(pokemon : Pokemon){
    console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);  }
}
