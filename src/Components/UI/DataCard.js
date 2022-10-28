import React, { createContext } from "react";
import "./DataCard.scss";
import AddCartButton from "../Cart/AddCartButton";

export const addCartContext = createContext([]);
const DataCard = (props) => {
  return (
    <div className="dataWraper">
      {props.dataSet.map((data) => {
        const foodItemPrice = Math.floor(Math.random() * 400 + 1);
        return (
          <div className="food__div" key={data.idCategory}>
            <div>
              <img
                className="food__img"
                src={data.strCategoryThumb}
                alt="food"
              />
            </div>
            <div className="food__name">
              <h2>{data.strCategory}</h2>
            </div>
            <div className="food__description">
              <p>{data.strCategoryDescription.slice(0, 350)}</p>
            </div>
            <div className="food__price">
              <h2>{"Price : $" + foodItemPrice}</h2>
            </div>

            <addCartContext.Provider value={[data.strCategory, foodItemPrice]}>
              <AddCartButton />
            </addCartContext.Provider>
          </div>
        );
      })}
    </div>
  );
};

export default DataCard;
