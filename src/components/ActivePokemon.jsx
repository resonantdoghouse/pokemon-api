import React from 'react';

function ActivePokemon(props) {
  const { name, sprites, weight, types } = props.activePokemonObj;

  if (sprites === undefined) {
    return <p>Loading pokemon data...</p>;
  }

  return (
    <section className="active-pokemon">
      <h2>{name}</h2>
      <img
        src={sprites.front_default}
        alt={name}
        className="active-pokemon__img"
      />
      <p>Weight: {weight}</p>
      <p>Number of Types: {types.length}</p>
      <ul>
        {types.map((arrElem) => (
          <li key={arrElem.type.name}>{arrElem.type.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default ActivePokemon;
