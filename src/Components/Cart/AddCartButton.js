import React, { useContext, useState } from "react";
import "./AddCartButton.scss";
import { addCartContext } from "../UI/DataCard";
import AddCart from "./AddCart";

const AddCartButton = () => {
  const dataCart = useContext(addCartContext);
  const [foodName, foodPrice] = dataCart;
  console.log(foodName, foodPrice, "Food Data Values");
  console.log(dataCart, "dataCart");

  const [showAddCart, setShowAddCart] = useState(false);
  const [showAddCartData, setShowAddCartData] = useState([]);

  const onAddCartHandler = () => {
    setShowAddCart(true);
    setShowAddCartData(dataCart);
  };

  console.log("showAddCartData", showAddCartData);

  return (
    <div className="AddCart">
      <button className="AddCart__button" onClick={onAddCartHandler}>
        Add Cart
      </button>
      <AddCart value={[showAddCart, showAddCartData, setShowAddCart]} />
    </div>
  );
};

export default AddCartButton;
