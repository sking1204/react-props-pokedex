import React from "react";
import items from "./items";
import Pokecard from "./Pokecard";

function App() {
  return (
    <div className="App">
      <Pokecard items={items} />
    </div>
  );
}

export default App;