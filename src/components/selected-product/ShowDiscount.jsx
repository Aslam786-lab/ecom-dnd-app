import { useState } from "react";

import "../../styles/selected-product/ShowDiscount.css";
import { DownArrowIcon } from "../icons/Icons";

const options = ["% Off", "Flat Off"];

export default function ShowDiscount({ isParent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("% Off");
  const [discount, setDiscount] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDiscount = (e) => {
    setDiscount(e.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className={`show-discount ${isParent ? "" : "child"}`}>
      <input type="number" onChange={handleDiscount} value={discount} />
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOption}
          <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
            <DownArrowIcon />
          </span>
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
