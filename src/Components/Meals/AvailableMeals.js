import React, { useState, useEffect } from "react";
import DataCard from "../UI/DataCard";
import axios from "axios";

const AvailableMeals = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        // console.log(response.data.categories);
        setData(response.data.categories);
      });
    // console.log(data, "data");
  }, []);
  return (
    <DataCard dataSet={data} />
    // <div className="foodItems__grid">
    //   {data.map((foodItem) => {
    //     <DataCard dataSet={{ ...foodItem }} />;

    //   })}
    // </div>
  );
};

export default AvailableMeals;
