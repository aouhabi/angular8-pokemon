import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { PokemonsService } from "./services/pokemons.service";


import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { LoaderComponent } from "./../../components/loader/loader.component";

import { AuthGuardService } from "./../../Service/auth-guard.service";

import { FormsModule } from "@angular/forms";
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    
    PokemonRoutingModule
  ],
  providers:[PokemonsService,AuthGuardService]
})
export class PokemonsModule { }
