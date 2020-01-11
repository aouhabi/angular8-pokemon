import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './../../../../model/Pokemon';
import { PokemonsService } from './../../services/pokemons.service';
@Component({
  selector: 'edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe(
    pokemon => this.pokemon = pokemon  
    );
  }

}
