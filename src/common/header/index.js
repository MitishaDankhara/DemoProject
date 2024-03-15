import React, { useRef, useState } from "react";
import "./header.scss";
import Logo from "../../assets/logo.png.webp";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../CustomHook/hook";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenddProduct, setIsOpenddProduct] = useState(false);
  const [isOpenddPages, setIsOpenddPages] = useState(false);
  const [isOpenddBlog, setIsOpenddBlog] = useState(false);
  const DropDownRef = useRef(null);
  useOnClickOutside(DropDownRef, () => setIsOpenddProduct(false));
  useOnClickOutside(DropDownRef, () => setIsOpenddPages(false));
  useOnClickOutside(DropDownRef, () => setIsOpenddBlog(false));
  useOnClickOutside(DropDownRef, () => setIsOpenMenu(false));

  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const togglePageDropdown = () => {
    setShowPageDropdown(!showPageDropdown);
  };
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const toggleBlogDropdown = () => {
    setShowBlogDropdown(!showBlogDropdown);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="header_alignment">
            <div className="header_logo">
              <Link to={"/"}>
                <img src={Logo} alt="Pillow Mart" />
              </Link>
            </div>
            <div className="header_menu">
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <Link to={"/about"}>
                <p>About</p>
              </Link>
              <Link to={""}>
                <p onClick={() => setIsOpenddProduct(true)}>
                  Product
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m7 10 5 5 5-5z"></path>
                  </svg>
                  <div
                    className={`product_drop_down ${
                      isOpenddProduct ? "open" : ""
                    }`}
                    ref={DropDownRef}
                  >
                    <Link to={"/productList"}>
                      <p>Product List</p>
                    </Link>
                    <Link to={"/productDetails"}>
                      <p>Product Details</p>
                    </Link>
                  </div>
                </p>
              </Link>
              <Link to={""}>
                <p onClick={() => setIsOpenddPages(true)}>
                  Pages
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m7 10 5 5 5-5z"></path>
                  </svg>
                  <div
                    className={`product_drop_down ${
                      isOpenddPages ? "open" : ""
                    }`}
                    ref={DropDownRef}
                  >
                    <Link to={"/login"}>
                      <p>Login</p>
                    </Link>
                    <Link to={"/productCheckout"}>
                      <p>Product Checkout</p>
                    </Link>
                    <Link to={"/shoppingCart"}>
                      <p>Shopping Cart</p>
                    </Link>
                    <p>Confirmation</p>
                    <Link to={"/element"}>
                      <p>Elements</p>
                    </Link>
                  </div>
                </p>
              </Link>
              <Link to={""}>
                <p onClick={() => setIsOpenddBlog(true)}>
                  Blog
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m7 10 5 5 5-5z"></path>
                  </svg>
                  <div
                    className={`product_drop_down ${
                      isOpenddBlog ? "open" : ""
                    }`}
                    ref={DropDownRef}
                  >
                    <Link to={"/blog"}>
                      <p>Blog</p>
                    </Link>
                    <Link to={"/singleBlog"}>
                      <p>Single Blog</p>
                    </Link>
                  </div>
                </p>
              </Link>
              <Link to={"/contact"}>
                <p>Contact</p>
              </Link>
            </div>
            <div
              className="header_menu_mobile"
              onClick={() => setIsOpenMenu(true)}
            >
              <div
                className={`menu_icon ${isOpenMenu ? "open" : ""}`}
                ref={DropDownRef}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
                <div className="mobile_menu_item">
                  <Link to={"/home"}>
                    <p>Home</p>
                  </Link>
                  <Link to={"/about"}>
                    <p>About</p>
                  </Link>
                  <p onClick={toggleProductDropdown}>
                    Product
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="m7 10 5 5 5-5z" />
                    </svg>
                  </p>
                  {showProductDropdown && (
                    <div className="product_dropDown">
                      <Link to={"/productList"}>
                        <p>Product List</p>
                      </Link>
                      <Link to={"/productDetails"}>
                        <p>Product Details</p>
                      </Link>
                    </div>
                  )}
                  <Link to={""}>
                    <p onClick={togglePageDropdown}>
                      Pages
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="m7 10 5 5 5-5z"></path>
                      </svg>
                    </p>
                    {showPageDropdown && (
                      <div className="product_dropDown">
                        <Link to={"/login"}>
                          <p>Login</p>
                        </Link>
                        <Link to={"/productCheckout"}>
                          <p>Product Checkout</p>
                        </Link>
                        <Link to={"/shoppingCart"}>
                          <p>Shopping Cart</p>
                        </Link>
                        <p>Confirmation</p>
                        <Link to={"/element"}>
                          <p>Elements</p>
                        </Link>
                      </div>
                    )}
                  </Link>
                  <Link to={""}>
                    <p onClick={toggleBlogDropdown}>
                      Blog
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="m7 10 5 5 5-5z"></path>
                      </svg>
                    </p>
                    {showBlogDropdown && (
                      <div className="product_dropDown">
                        <Link to={"/blog"}>
                          <p>Blog</p>
                        </Link>
                        <Link to={"/singleBlog"}>
                          <p>Single Blog</p>
                        </Link>
                      </div>
                    )}
                  </Link>
                  <Link to={"/contact"}>
                    <p>Contact</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="header_icons">
              <div className="search" onClick={() => setIsOpen(true)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 17 17"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g></g>
                  <path d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"></path>
                </svg>
              </div>
              <div className="shopping_cart">
                <svg
                  stroke="currentColor"
                  fill="#4B3049"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                </svg>
              </div>
              <div className={`search_bar ${isOpen ? "open" : ""}`}>
                <input type="text" placeholder="Search Here" />
                <div className="close_icon" onClick={() => setIsOpen(false)}>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 15 15"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
