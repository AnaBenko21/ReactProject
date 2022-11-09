import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  return (
    <div className="KopceProdukti">
      <button>
        <Link to="/category/:products">BUY ME !</Link>
      </button>
    </div>
  );
}

export default Products;
