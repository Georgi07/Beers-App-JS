import React from "react";
import Beer from "./Beer/Beer";
import "./BeersList.css";

const BeersList = ({ beersList }) => {
  const beers = beersList.map((beer) => {
    return (
      <Beer
        key={beer.id}
        id={beer.id}
        image_url={beer.image_url}
        name={beer.name}
        description={beer.description}
      />
    );
  });

  return <section>{beers}</section>;
};

export default BeersList;
