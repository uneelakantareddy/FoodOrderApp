import React from "react";
import Modal from "../UI/Modal";
import "./AddCart.scss";
import { connect } from "react-redux";
import { AddCartAction, SubCartAction } from "../../redux/actions";
import { createContext } from "react";
import Cart from "./Cart";

export const gotoCartContext = createContext();
const AddCart = (props) => {
  const [showAddCart, foodItemData, setShowAddCart] = props.value;

  var quantity = props.local_variable;
  var fName = foodItemData[0];
  var fPrice = foodItemData[1];

  console.log("CART DATA VALUES ", quantity, fName, fPrice);

  return (
    <div>
      {showAddCart && (
        <Modal>
          <div className="foodItem">
            <h1 className="foodItem__Name">{fName}</h1>

            <h2 className="foodItem__Price">{`${quantity}x${fPrice}`}</h2>

            <button className="foodItem__Add" onClick={props.AddCartAction}>
              +
            </button>
            <button className="foodItem__Sub" onClick={props.SubCartAction}>
              -
            </button>
          </div>
          <div className="actions">
            <button
              className="actions__closeBtn"
              onClick={() => setShowAddCart(!showAddCart)}
            >
              Close
            </button>
            <button className="actions__gotoCartBtn">Go To Cart</button>
          </div>
          <gotoCartContext.Provider value={[quantity, fName, fPrice]}>
            <Cart />
          </gotoCartContext.Provider>
        </Modal>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  local_variable: state,
});

export default connect(mapStateToProps, { AddCartAction, SubCartAction })(
  AddCart
);
