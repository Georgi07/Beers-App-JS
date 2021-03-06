import React, { useState, useContext, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { beersContext } from "./../../../context/context";
import "./Beer.css";

const Beer = ({ id, image_url, name, description }) => {
  const [favorite, setFavorite] = useState(false);
  const {
    playBeerOpeningSound,
    addFavoriteBeer,
    favoriteBeersList,
    removeFavoriteBeer,
  } = useContext(beersContext);

  useEffect(() => {
    if (favoriteBeersList.includes(id)) {
      setFavorite(true);
    }
  }, [favoriteBeersList]);

  const favoriteSelected = (id) => {
    if (!favoriteBeersList.includes(id)) {
      addFavoriteBeer(id);
    } else {
      removeFavoriteBeer(id);
      setFavorite(!favorite);
    }
  };

  return (
    <div className="Beer" key={id}>
      <img
        src={image_url}
        alt="BeerImageHere"
        onClick={() => playBeerOpeningSound()}
      />
      <div className="Content">
        <FavoriteIcon
          style={{ color: favorite ? "red" : "black" }}
          onClick={() => favoriteSelected(id)}
        />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Beer;
