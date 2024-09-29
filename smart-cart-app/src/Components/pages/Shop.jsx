import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Trending from "../Trending/Trending";
import Offers from '../Offers/Offers'
import NewCollection from '../NewCollection/NewCollection'
import NewLetter from '../NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <Offers />
      <NewCollection />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default Shop;
