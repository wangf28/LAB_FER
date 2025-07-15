import React from "react";
import MyCard from "./MyCard.jsx";
import { OrchidsData } from "../../ListOfOrchids.js";
export default function Home() {
  return (
    <>
      {/* Thêm container và margin-top */}
      <div className="row">
        {OrchidsData.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            {/* Thêm col-md-4 và key */}
            <MyCard {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
