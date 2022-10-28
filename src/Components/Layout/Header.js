import React from "react";
import "./Header.scss";
import mealsImg from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Delicious Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img className="main-image__img" src={mealsImg} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
