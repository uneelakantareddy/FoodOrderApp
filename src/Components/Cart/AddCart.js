import React, { useState, createContext } from "react";
import Modal from "../UI/Modal";
import "./AddCart.scss";
import { connect } from "react-redux";
import { AddCartAction, SubCartAction } from "../../redux/actions";
import Cart from "./Cart";
import { UserContext } from "../Layout/HeaderCartButton";

export const gotoCartContext = createContext();
const AddCart = (props) => {
  const { showAddCart, showAddCartData, setShowAddCart } = props.value;
  const [shownCart, setShownCart] = useState(false);
  // console.log(showAddCartData);
  var quantity = props.local_variable;
  var fName = showAddCartData[0] ?? 0;
  var fPrice = showAddCartData[1] ?? 0;
  // const { addCartData } = props.showAddCartData;
  // console.log(addCartData);
  // console.log("CART DATA VALUES ", quantity, fName, fPrice);

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
          <gotoCartContext.Provider
            value={{ quantity: quantity, fName: fName, fPrice: fPrice }}
          >
            <UserContext.Provider value={[shownCart, setShownCart]}>
              <Cart />
            </UserContext.Provider>
          </gotoCartContext.Provider>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    local_variable: state,
  };
};

export default connect(mapStateToProps, { AddCartAction, SubCartAction })(
  AddCart
);
