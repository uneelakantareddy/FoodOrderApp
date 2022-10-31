import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.scss";
import { UserContext } from "../Layout/HeaderCartButton";

const Cart = () => {
  const [shownCart, setShownCart] = useContext(UserContext);

  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "sushi", amount: 2 }].map((item) => (
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
