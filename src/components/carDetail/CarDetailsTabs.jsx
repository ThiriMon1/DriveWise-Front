import React, { useState } from "react";
import "../../styles/style.css";

const tabs = [
  {
    id: "tabs-1",
    title: "Vehicle Overview",
    content: "General vehicle overview...",
  },
  { id: "tabs-2", title: "Technical", content: "Technical specifications..." },
  {
    id: "tabs-3",
    title: "Features & Options",
    content: "Car features and options...",
  },
  {
    id: "tabs-4",
    title: "Vehicle Location",
    content: "Vehicle location details...",
  },
];

const CarDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("tabs-1");

  return (
    <div className="car__details__tab">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <a
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetailsTabs;
