import React, { useContext, useEffect, useState } from "react";
import { beersContext } from "./../context/context";
import RandomBeer from "./../components/RandomBeer/RandomBeer";
import BeersList from "./../components/BeersLIst/BeersList";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { getBeersData, beersList, generateRandomBeer, randomBeer } =
    useContext(beersContext);

  useEffect(() => {
    getBeersData();
  }, []);

  const showRandomBeerModal = () => {
    generateRandomBeer();
    setShowModal(!showModal);
  };

  return (
    <main style={{ width: "100%", textAlign: "center" }}>
      <h1>Beers</h1>
      <button className="RandomBeerBtn" onClick={() => showRandomBeerModal()}>
        Random Beer
      </button>

      <input type="text" onChange={(e) => getBeersData(e.target.value)} />

      {showModal && randomBeer ? (
        <RandomBeer
          beer={randomBeer}
          closeModal={(close) => setShowModal(close)}
        />
      ) : null}

      <BeersList beersList={beersList} />
    </main>
  );
};
export default Home;
