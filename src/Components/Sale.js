import React from "react";
import { Link } from "react-router-dom";
import "./Sale.css";

function Sale() {
  return (
    <div>
      <button>
        <Link to={"/"}>Go back</Link>
      </button>
      <div className="SlikaSale"></div>
    </div>
  );
}

export default Sale;
