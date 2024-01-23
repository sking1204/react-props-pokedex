import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ items }) => {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {items.map(i => (
          <Pokecard
            id={i.id}
            name={i.name}
            type={i.type}
            exp={i.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
