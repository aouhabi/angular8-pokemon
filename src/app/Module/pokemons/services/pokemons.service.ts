import { Injectable } from '@angular/core';

import { Pokemon } from "./../../../model/Pokemon";

import { Observable, of } from "rxjs";
import { catchError,map,tap } from "rxjs/operators";
import { HttpClient, HttpHeaders,HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonsUrl :string = "api/pokemons";
  constructor(private http : HttpClient) { }

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=> this.log("fetched pokemons")), 
      catchError(this.handleError("getPokemons", []))

      );
  }

  
  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {

    const url = `${this.pokemonsUrl}/${id}` ;
    return this.http.get<Pokemon>(url).pipe(
      tap(_=> this.log(`fetched pokemon with id=${id}`)), 
      catchError(this.handleError<Pokemon>(`getPokemons with id=${id}`))

      );
   
  }

  updatePokemon(pokemon: Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<Pokemon>(this.pokemonsUrl,pokemon,httpOptions).pipe(
      tap(_=> this.log(`updated pokemon : ${pokemon}`)), 
      catchError(this.handleError<Pokemon>(`update: ${pokemon}`))

      );
  }

  deletePokemon(pokemon : Pokemon):Observable<Pokemon>{

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = `${this.pokemonsUrl}/${pokemon.id}` ;

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_=> this.log(`delete pokemon : ${pokemon}`)), 
      catchError(this.handleError<Pokemon>(`delete: ${pokemon}`))

      );
  }
  searchPokemons(term : string):Observable<Pokemon[]>{
    if(!term.trim()){
      return of([]);
    }

    return  this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
      tap(_=> this.log(`find pokemons maching "${term}"`)), 
      catchError(this.handleError("searchPokemons", []))

      );

  }
  getPokemonTypes(): string[]{
    return [
      'Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'
    ]
  }

  private log(log :string): void{
    console.info(log);
  }
  private handleError<T>(operation='operation',result?:T) {
   return (error : any) :Observable <T> => {
     console.log(error);
     console.log(`${error} failed : ${error.message}`)
     return of(result as T)

   }
  
  }
}
