import React from 'react';
import { Link } from 'react-router-dom';

function PokemonItem(props) {
  return (
    <li className="pokemon-list__item">
      <Link
        to={`/pokemon/${props.pokemon.name}`}
        className="pokemon-list__link"
      >
        {props.pokemon.name}
      </Link>
    </li>
  );
}

export default PokemonItem;
