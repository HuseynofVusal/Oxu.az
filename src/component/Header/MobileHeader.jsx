import React from "react";
import { GiCancel } from "react-icons/gi";

const MobileHeader = ({ categories, setIsMobile }) => {
  return (
    <ul className="fixed top-0 right-0 w-[50vw] h-screen bg-[#e1e1e1] z-50 flex flex-col p-4 gap-2">
      <li
        onClick={() => setIsMobile(false)}
        className="absolute top-4 right-4 text-2xl"
      >
        <GiCancel />
      </li>
      {categories.map((category) => (
        <li
          key={category.id}
          className="inline-block px-3 py-1 border hover:bg-[#dedede]] border-[#dedede] rounded-2xl whitespace-nowrap"
        >
          <p>{category.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MobileHeader;
