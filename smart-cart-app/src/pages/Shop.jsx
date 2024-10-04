import React from "react";
import Hero from "../Components/Hero/Hero";
import Trending from "../Components/Trending/Trending";
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Offers />
      <NewCollection />
      <NewLetter />
    </div>
  );
};

export default Shop;
