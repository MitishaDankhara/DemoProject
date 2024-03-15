import React from "react";
import "./product.scss";
import Product1 from "../../../assets/single_product_1.png.webp";
import Product2 from "../../../assets/single_product_2.png.webp";
import Product3 from "../../../assets/single_product_3.png.webp";
import { Link } from "react-router-dom";
export default function ProductHomePage() {
  const productDetail = [
    {
      price: "Started from $10",
      heading: "Printed memory foam brief modern throw pillow case",
      btn: "EXPLORE NOW",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="products_grid_main">
          <div className="product_image">
            <div className="image_bg">
              <img src={Product1} alt="Product" />
            </div>
          </div>
          <div className="product_Desc">
            {productDetail &&
              productDetail?.map((el, i) => {
                return (
                  <div key={i}>
                    <p>{el?.price}</p>
                    <h2>{el?.heading}</h2>
                    <Link to={"/productList"}>
                      <button className="btn transparent">{el?.btn}</button>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="products_grid_main">
          <div className="product_Desc">
            {productDetail &&
              productDetail?.map((el, i) => {
                return (
                  <div key={i}>
                    <p>{el?.price}</p>
                    <h2>{el?.heading}</h2>
                    <Link to={"/productList"}>
                      <button className="btn transparent">{el?.btn}</button>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="product_image">
            <div className="image_bg">
              <img src={Product2} alt="Product" />
            </div>
          </div>
        </div>
        <div className="products_grid_main">
          <div className="product_image">
            <div className="image_bg">
              <img src={Product3} alt="Product" />
            </div>
          </div>
          <div className="product_Desc">
            {productDetail &&
              productDetail?.map((el, i) => {
                return (
                  <div key={i}>
                    <p>{el?.price}</p>
                    <h2>{el?.heading}</h2>
                    <Link to={"/productList"}>
                      <button className="btn transparent">{el?.btn}</button>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
