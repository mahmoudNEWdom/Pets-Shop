import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import MainView from "./components/MainView";
import SecondView from "./components/SecondView";
import { PetsCartForm } from "./components/petsCartform";
import { PetsCartList } from "./components/PetsCartList";
import "./Css/App.css";

import FetchingAPI from "./components/FetchingAPI";
import ContextProvider from "./context/contextProvider";

export function App() {
  const [products, setProducts] = useState([]);

  

  return (
    <>
    <ContextProvider>
      <NavBar />
      <MainView />
      <SecondView/>
      <PetsCartForm products={products} setProducts={setProducts} />
      <PetsCartList products={products} setProducts={setProducts} />
        {/* <FetchingAPI/>   */}
    </ContextProvider>
    </>
  );
}
