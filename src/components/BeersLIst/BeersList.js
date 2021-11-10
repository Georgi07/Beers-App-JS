import React from "react";
import "./BeersList.css";

const BeersList = ({ beersList }) => {
  function beers() {
    beersList.map((beer) => (
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.description}</p>
      </div>
    ));
  }

  return (
    <section>
      {beersList.map((beer) => (
        <div>
          <h2>{beer.name}</h2>
          <p>{beer.description}</p>
        </div>
      ))}
    </section>
  );
};

export default BeersList;
