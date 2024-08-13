import React from 'react';
import { Link } from "react-router-dom";
import "./MyProduct.scss";
import { productList } from "../../lib/dummydata.js";

function MyProduct() {
    const data = productList;
  return (
    <div className="my-products">
      {data.map((item) => (
        <div className="card" key={item.productId}>
          <Link to={`/${item.productId}`} className="imageContainer">
            <img src={item.images} alt={item.productName} />
          </Link>
          <div className="textContainer">
            <h2 className="title">
              <Link to={`/${item.productId}`}>{item.productName}</Link>
            </h2>
            <p className="description">{item.description}</p>
            <p className="price">$ {item.price}</p>
            <div className="bottom">
              <div className="feature">Contact No - {item.contactNo}</div>
              <div className="feature">Username - {item.userName}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyProduct;
