import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  const [data, setData] = useState(["Home"]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData([...data, ...json]));
  }, []);

  return (
    <div className="NavBar">
      <h1>Shop</h1>
      {data.map((item) => {
        return (
          <NavLink
            to={item === "Home" ? "/" : `category/${item}`}
            className="ButtonNavigation"
          >
            {item}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navbar;
