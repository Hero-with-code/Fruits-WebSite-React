import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Menus from "./components/Menus/Menus.js";
import Banner from "./components/Banners/Banner.js";
import Banner2 from "./components/Banners/Banner2.js";
import Banner3 from "./components/Banners/Banner3.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
