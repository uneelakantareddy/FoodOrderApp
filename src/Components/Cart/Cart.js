import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.scss";
import { UserContext } from "../Layout/HeaderCartButton";
import { gotoCartContext } from "./AddCart";
const Cart = (props) => {
  // const [quantity, name, price] = props.cartData;
  // console.log(props.cartData);
  const data = useContext(gotoCartContext);
  // console.log("CartData", data);
  const [shownCart, setShownCart] = useContext(UserContext);
  console.log("cartshownData", shownCart);

  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "sushi", amount: 2, price: 36.5 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {shownCart && (
        <Modal>
          {cartItems}

          <div className="total">
            <span>Total Amount</span>
            <span>35.6</span>
          </div>
          <div className="actions">
            <button
              className="actions__closeBtn"
              onClick={() => {
                setShownCart(!shownCart);
              }}
            >
              Close
            </button>

            <button className="actions__orderBtn">Order</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
