import React, { useContext } from "react";
import { beersContext } from "./../../context/context";
import "./RandomBeer.css";
import CloseIcon from "@mui/icons-material/Close";

const RandomBeer = ({ beer, closeModal }) => {
  const { playBeerOpeningSound } = useContext(beersContext);

  return (
    <div className="RandomBeer">
      <div className="BeerContent">
        <CloseIcon className="CloseIcon" onClick={() => closeModal(false)} />
        <img
          src={beer?.image_url}
          alt="Random Beer"
          onClick={() => playBeerOpeningSound()}
        />
        <h1>{beer.name}</h1>
        <p>{beer.description}</p>
      </div>
    </div>
  );
};
export default RandomBeer;
