import React from "react";

const Aside = () => {
  return (
    <div className="fixed scroll-container top-0 left-0 w-[56px] h-screen  bg-[#ece9e9] lg:flex hidden flex-col overflow-auto">
      <ul className="sidebartop px-3 py-6">
        <li className="py-1 px-2 flex justify-center items-center mb-[24px] border h-[24px] text-[.78rem] font-bold border-[#333] rounded-full">
          AZ
        </li>
        <li className="py-1 px-2 flex justify-center items-center mb-[24px] border h-[24px] text-[.78rem] font-bold border-[#333] rounded-full">
          RU
        </li>
        <li className="py-1 px-2 flex justify-center items-center mb-[24px] border h-[24px] text-[.78rem] font-bold border-[#333] rounded-full">
          TR
        </li>
        <li className="py-1 px-2 flex justify-center items-center mb-[24px] h-[24px] text-[.78rem] rounded-full">
          <i className="text-2xl ri-information-line"></i>
        </li>
        <li className="!mt-10 py-1 px-2 flex justify-center items-center mb-[24px] h-[24px] text-[.78rem]  rounded-full">
          <i className="text-2xl ri-megaphone-line"></i>
        </li>
        <li className="!mt-10 py-1 px-2 flex justify-end items-center mb-[24px] h-[24px] text-[.78rem] border  rounded-full">
          <i className="text-xl ri-moon-line"></i>
        </li>
      </ul>
      <ul className="sidebarbottom flex flex-col px-3">
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-facebook-circle-line"></i>
          </a>
        </li>
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-xrp-line"></i>
          </a>
        </li>
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-telegram-2-fill"></i>
          </a>
        </li>
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-whatsapp-fill"></i>
          </a>
        </li>
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-instagram-line"></i>
          </a>
        </li>
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-apple-fill"></i>
          </a>
        </li>
        <li className="mb-[24px]">
          <a href="">
            <i className="text-2xl  ri-google-play-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
