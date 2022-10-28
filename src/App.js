import React from "react";
import Header from "../src/Components/Layout/Header";
import Meals from "../src/Components/Meals/Meals.js";
// import { useState, createContext } from "react";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};
export default App;
