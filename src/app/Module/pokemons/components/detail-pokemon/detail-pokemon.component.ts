import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PokemonsService } from "./../../services/pokemons.service";

import { Pokemon } from "../../../../model/Pokemon";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
  
})
export class DetailPokemonComponent implements OnInit {


  pokemon :  Pokemon = null;
  
  constructor(private route: ActivatedRoute,
			 private router: Router,
			 private pokemonsService :PokemonsService) { }

  ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
	    this.pokemonsService.getPokemon(id).subscribe(
			pokemon => this.pokemon= pokemon  
		);
	}
	goBack(): void {
		this.router.navigate(['/pokemon/all']);
	}
	goEdit(pokemon:Pokemon): void{
		let link = ['/pokemon/edit',pokemon.id]
		this.router.navigate(link);
	}
	deletePokemon(pokemon: Pokemon){
		this.pokemonsService.deletePokemon(pokemon).subscribe(
			()=> this.goBack()
		)
	}
}
