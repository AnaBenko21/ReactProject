import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "./Products";

function Card() {
  const [data, setData] = useState(["Home"]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="Card">
      {data.map((item) => {
        return (
          <div className="CardContainer">
            <div>{item.title}</div>
            <img className="CardSlika" src={item.image} />
            <div className="PriceCard">{item.price}</div>
            <button className="KopceCard">
              <Link to="/category/:products">BUY ME !</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
