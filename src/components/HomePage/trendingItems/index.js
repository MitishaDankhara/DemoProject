import React from "react";
import "./trendingItem.scss";
import Item1 from "../../../assets/tranding_item_1.png.webp";
import Item2 from "../../../assets/tranding_item_2.png.webp";
import Item3 from "../../../assets/tranding_item_3.png.webp";
import Item4 from "../../../assets/tranding_item_4.png.webp";
import Item5 from "../../../assets/tranding_item_5.png.webp";
import Item6 from "../../../assets/tranding_item_6.png.webp";
export default function TrendingItem() {
  const trending_item = [
    {
      img: Item1,
      heading: "Cervical pillow for airplane car office nap pillow",
      price: "From $5",
    },
    {
      img: Item2,
      heading: "Foam filling cotton slow rebound pillows",
      price: "From $5",
    },
    {
      img: Item3,
      heading: "Memory foam filling cotton Slow rebound pillows",
      price: "From $5",
    },
    {
      img: Item4,
      heading: "Foam filling cotton slow rebound pillows",
      price: "From $5",
    },
    {
      img: Item5,
      heading: "Cervical pillow for airplane car office nap pillow",
      price: "From $5",
    },
    {
      img: Item6,
      heading: "Memory foam filling cotton Slow rebound pillows",
      price: "From $5",
    },
  ];
  return (
    <div>
      <div className="trending_item_bg">
        <div className="container">
          <div className="trending_item_heading">
            <h2>Trending Items</h2>
          </div>
          <div className="item_grid_card">
            {trending_item &&
              trending_item?.map((el, i) => {
                return (
                  <div className="item_card_item" key={i}>
                    <img src={el?.img} alt="" />
                    <h2>{el?.heading}</h2>
                    <p>{el?.price}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}