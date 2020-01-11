import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./components/detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./components/edit-pokemon/edit-pokemon.component";

import { AuthGuardService } from "./../../Service/auth-guard.service";
const pokemonsRoute: Routes = [
  {
    path:'pokemon',
    canActivate: [AuthGuardService],
    children:[
      { path: 'all', component: ListPokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent },
      { path: ':id', component: DetailPokemonComponent },
    ]
  }
  

];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoute),
    
  ],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
