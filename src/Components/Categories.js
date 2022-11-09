import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [category]);
  return (
    <div className="Category">
      {data.map((item) => {
        return (
          <div className="CategoryCard">
            <div className="title">{item.title}</div>
            <img className="image" src={item.image} />
            <div className="price">{item.price}$</div>
            <button className="kopce">
              <Link to="/category/:products"> BUY ME !</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
