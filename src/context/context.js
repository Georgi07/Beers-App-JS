import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

export const beersContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [beersList, setBeersList] = useState([]);
  const [randomBeer, setRandomBeer] = useState();
  const [favoriteBeers, setFavoriteBeers] = useState([]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  useEffect(() => {
    getStoredFavBeers();
  }, []);

  const getStoredFavBeers = () => {
    let storedBeers = localStorage.getItem("storedFavoriteBeers");
    let parsedData = [];

    storedBeers.split(",").map((favBeer) => {
      parsedData.push(+favBeer);
    });
    setFavoriteBeers(...favoriteBeers, parsedData);
  };

  const addFavoriteBeer = (beerId) => {
    if (!favoriteBeers.includes(beerId)) {
      setFavoriteBeers([...favoriteBeers, beerId]);

      localStorage.setItem("storedFavoriteBeers", [
        localStorage.getItem("storedFavoriteBeers"),
        beerId,
      ]);
    }
  };

  const removeFavoriteBeer = (beerId) => {
    const filteredFavorites = favoriteBeers.filter(
      (favId) => +favId !== beerId
    );
    setFavoriteBeers(filteredFavorites);
    localStorage.setItem("storedFavoriteBeers", filteredFavorites);
  };

  const getBeersData = async (searchQuery) => {
    let response = await axios.get("https://api.punkapi.com/v2/beers", {
      params: { beer_name: searchQuery },
    });
    setBeersList(response.data);
  };

  const generateRandomBeer = async () => {
    let response = await axios.get("https://api.punkapi.com/v2/beers/random");
    setRandomBeer(response.data[0]);
  };

  const playBeerOpeningSound = () => {
    let sound = new Audio(
      "https://www.soundjay.com/drinks/sounds/bottle-open-1.mp3"
    );
    sound.play();
  };

  return (
    <beersContext.Provider
      value={{
        getBeersData,
        beersList,
        generateRandomBeer,
        randomBeer,
        playBeerOpeningSound,
        addFavoriteBeer,
        favoriteBeers,
        removeFavoriteBeer,
        provider,
        signer,
      }}
    >
      {children}
    </beersContext.Provider>
  );
};
