import React from "react";
import "./sizeSelector.scss";
import { useState } from "react";
//import { Link } from "react-router-dom";

import SizePopup from "./SizePopup";

const SizeSelector = () => {
  const [select, setSelect] = useState();
  const [hidden, setHidden] = useState(true);

  const sizeGuides = [
    { size: 38, sizeEU: "XXS" },
    { size: 40, sizeEU: "XS" },
    { size: 42, sizeEU: "S" },
    { size: 44, sizeEU: "M" },
    { size: 46, sizeEU: "L" },
    { size: 48, sizeEU: "XL" },
    { size: 50, sizeEU: "XXL" },
  ];

  return (
    <>
      <div className="sizeSelector">
        <div className="sizeSelector__title">
          <span>Select size:</span>
          <a href="#sizePopup" className="sizeSelector__link">
            Size gide
          </a>
        </div>

        <ul
          className="sizeSelector__input"
          onClick={() => {
            if (!hidden) {
              setHidden(true);
            } else {
              setHidden(false);
            }
          }}
        >
          <li
            className={`sizeSelector__input_item 
          ${hidden ? "showItem" : "hideItem"}
          `}
          >
            Size <strong>{select}</strong>
            <ul className={`${hidden ? "sizeGuides_hide" : "sizeGuides"}`}>
              {sizeGuides.map((value, index) => (
                <li
                  className="sizeGuides__item"
                  value={value}
                  key={`size_${index}`}
                  onClick={() => {
                    setSelect(value.sizeEU);
                    setHidden(true);
                  }}
                >
                  {value.size} / {value.sizeEU}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <SizePopup />
    </>
  );
};
export default SizeSelector;
