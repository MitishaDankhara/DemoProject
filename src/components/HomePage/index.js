import React from "react";
import Herobanner from "./herobanner";
import ProductHomePage from "./product";
import TrendingItem from "./trendingItems";
import Testimonial from "./testimonial";

export default function HomePage() {
  return (
    <div>
      <Herobanner />
      <ProductHomePage />
      <TrendingItem />
      <Testimonial />
    </div>
  );
}
