import React, { useContext, useState } from "react";
import "./AddCartButton.scss";
import { addCartContext } from "../UI/DataCard";
import AddCart from "./AddCart";
import { createContext } from "react";
export const addToCartContext = createContext();

const AddCartButton = () => {
  const dataCart = useContext(addCartContext);
  // const [foodName, foodPrice] = dataCart;
  // console.log(foodName, foodPrice, "Food Data Values");
  // console.log(dataCart, "dataCart");

  const [showAddCart, setShowAddCart] = useState(false);
  const [showAddCartData, setShowAddCartData] = useState([]);
  // console.log(showAddCartData, "showCartData");

  const onAddCartHandler = () => {
    setShowAddCart(true);
    setShowAddCartData(dataCart);
    // return dispatch({
    //   type: "xyz",
    //   payload: item
    // })
  };

  return (
    <div className="AddCart">
      <button className="AddCart__button" onClick={onAddCartHandler}>
        Add Cart
      </button>

      {showAddCart && (
        <>
          <AddCart
            value={{
              showAddCart: showAddCart,
              showAddCartData: showAddCartData,
              setShowAddCart: setShowAddCart,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AddCartButton;
