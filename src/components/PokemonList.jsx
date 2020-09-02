import React from 'react';
import PokemonItem from './PokemonItem';

function PokemonList(props) {
  return (
    <ul className="pokemon-list">
      {props.pokemonArr.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
}

export default PokemonList;
