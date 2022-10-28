import React, { useState, createContext } from "react";
import "./HeaderCartButton.scss";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";

export const UserContext = createContext();

const HeaderCartButton = () => {
  const [shownCart, setShownCart] = useState(false);

  const onShownCartHandler = (event) => {
    event.preventDefault();
    setShownCart(true);
  };

  console.log("first", shownCart);

  return (
    <React.Fragment>
      <UserContext.Provider value={[shownCart, setShownCart]}>
        <Cart />
      </UserContext.Provider>
      <button className="headerButton" onClick={onShownCartHandler}>
        <span className="headerButton__icon">{<CartIcon />}</span>
        <span className="headerButton__name">Your Cart</span>
        <span className="headerButton__badge">3</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
