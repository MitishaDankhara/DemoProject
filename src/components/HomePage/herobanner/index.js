import React from "react";
import "./herobanner.scss";
import { Link } from "react-router-dom";
import Banner_image from "../../../assets/banner.png.webp";
import Dot_Image from "../../../assets/banner_pattern.png.webp";
export default function Herobanner() {
  return (
    <div>
      <div className="herobanner_flex_main">
        <div className="primary_color_pillar"></div>
        <div className="herobanner_heading">
          <h1>Best quality pillow</h1>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal
          </p>
          <Link to={"/productList"}>
            <button className="btn fill">Shop Now</button>
          </Link>
        </div>
        <div className="herobanner_image">
          <img src={Banner_image} alt="Banner" />
          <div className="absolute_image">
            <img src={Dot_Image} alt="Dotted" />
          </div>
        </div>
      </div>
    </div>
  );
}
