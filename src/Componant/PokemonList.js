import React from 'react';

const PokemonList = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div>
            {pokemon.map((p) => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
};

export default PokemonList;
