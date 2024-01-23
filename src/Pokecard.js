//Version 2:
import React from "react";
import "./Pokecard.css";

// Base URL
const pokemonImageBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div className= "Pokecard" key={item.id}>             
            
    
          <div className="Pokecard-title">{item.name}</div>
          <img className="Pokecard-image" src={`${pokemonImageBaseUrl}${item.id}.png`} alt={item.name} />
          <div className="Pokecard-data">{item.type}</div>
          <div className="Pokecard-data">{item.base_experience}</div>
          {/* Add other details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Pokecard;       


//Version 1:
// import React from "react";
// import "./Pokecard.css";

// function Pokecard({ items }) {
//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           {/* Render item details here */}
//           <p>{item.name}</p>
//           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} alt={item.name} />
//           <p>{item.type}</p>
//           <p>{item.base_experience}</p>
//           {/* Add other details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Pokecard;



