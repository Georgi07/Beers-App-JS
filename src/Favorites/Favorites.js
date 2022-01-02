import React, { useContext, useEffect } from "react";
import { beersContext } from "./../context/context";
import Beer from "./../components/BeersLIst/Beer/Beer";
import "./Favorites.css";

const Favorites = () => {
  const { favoriteBeersList, beersList, getBeersData } = useContext(beersContext);

  useEffect(() => {
    getBeersData();
  }, []);

  const favoriteList = beersList.map((beer) => {
    if (favoriteBeersList.includes(beer.id)) {
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
    <div>
      <h1>Favorites</h1>
      <section>{favoriteList}</section>
    </div>
  );
};

export default Favorites;
