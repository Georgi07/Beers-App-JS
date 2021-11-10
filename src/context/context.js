import React, { useState, useCallback } from "react";
import axios from "axios";

export const beersContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [beersList, setBeersList] = useState([]);

  const getBeersData = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeersList(response.data));
  };

  return (
    <beersContext.Provider value={{ getBeersData, beersList }}>
      {children}
    </beersContext.Provider>
  );
};
