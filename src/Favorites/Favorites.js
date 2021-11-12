import React, { useContext } from "react";
import { beersContext } from "./../context/context";
import Beer from "./../components/BeersLIst/Beer/Beer";

import "./Favorites.css";

const Favorites = () => {
  const { favoriteBeers, beersList } = useContext(beersContext);

  const favoriteList = beersList.map((beer) => {
    if (favoriteBeers.includes(beer.id)) {
      return (
        <Beer
          key={beer.id}
          id={beer.id}
          image_url={beer.image_url}
          name={beer.name}
          description={beer.description}
        />
      );
    }
  });

  return (
    <>
      <h1>Favorites</h1>
      <section>{favoriteList}</section>
    </>
  );
};

export default Favorites;
