import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.scss";
import useOnClickOutside from "../../CustomHook/hook";

const Dropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`product_drop_down ${isOpen ? "open" : ""}`}>
      <p onClick={handleOpen}>{title}</p>
      <ul ref={dropdownRef}>
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
