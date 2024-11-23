import React from "react";
import "../../styles/style.css";

const Sidebar = () => {
  return (
    <div className="car__details__sidebar">
      <div className="car__details__sidebar__model">
        <ul>
          <li>
            Stock <span>K99D10459934</span>
          </li>
          <li>
            Vin <span>3VWKM245686</span>
          </li>
        </ul>
        <a href="#" className="primary-btn">
          Get Today's Price
        </a>
      </div>
      <div className="car__details__sidebar__payment">
        <ul>
          <li>
            MSRP <span>$120,000</span>
          </li>
          <li>
            Dealer Discounts <span>$3,000</span>
          </li>
          <li>
            Price <span>$117,000</span>
          </li>
        </ul>
        <a href="#" className="primary-btn">
          <i className="fa fa-credit-card"></i> Express Purchase
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
