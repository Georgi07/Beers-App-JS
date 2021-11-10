import React, { useContext, useEffect } from "react";
import { beersContext } from "./../context/context";

import BeersList from "./../components/BeersLIst/BeersList";

const Home = () => {
  const { getBeersData, beersList } = useContext(beersContext);

  useEffect(() => {
    getBeersData();
  }, []);

  return (
    <div>
      <h1 style={{ width: "100%", textAlign: "center" }}>
        Home page just a test
      </h1>
      <BeersList beersList={beersList} />
    </div>
  );
};
export default Home;
