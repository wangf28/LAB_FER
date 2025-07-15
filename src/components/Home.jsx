import React, { useContext } from "react";
import MyCard from "./MyCard.jsx";
import { OrchidsData } from "../../ListOfOrchids.js";
import { ThemeContext } from "../contexts/ThemContext.jsx";
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* Thêm container và margin-top */}
      <div className={`row bg-${theme}`}>
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
