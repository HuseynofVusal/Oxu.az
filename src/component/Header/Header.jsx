import React, { useEffect, useRef, useState } from "react";
import { getAllCategories } from "../../service/service";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null); // scroll konteynerinə istinad

  useEffect(() => {
    async function fetchCategories() {
      const result = await getAllCategories();
      setCategories(result);
    }
    fetchCategories();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <header className="max-w-[1300px] mx-auto bg-white shadow-md">
      <div className="container max-w-[1300px] mx-auto flex justify-between items-center py-3 px-10 lg:pl-[76px]">
        <div className="w-full flex justify-between items-center gap-3">
          <a
            href="#"
            className="text-4xl lowercase font-serif text-[#3e8d9d] font-bold"
          >
            Oxu.az
          </a>

          <nav className="relative sm:flex hidden items-center w-full overflow-x-auto overflow-y-hidden mt-4">
            {/* Sol düymə */}
            <button
              onClick={scrollLeft}
              className="md:hidden block absolute left-0 z-10 bg-white p-2 shadow rounded-full"
            >
              <i className="ri-arrow-left-wide-line text-xl"></i>
            </button>
            {/* Mobile Header */}

            {isMobile && (
              <MobileHeader categories={categories} setIsMobile={setIsMobile} />
            )}

            {/* Scrollable container */}
            <ul
              ref={scrollRef}
              className="flex max-w-120 overflow-x-hidden no-scrollbar gap-2 px-12 scroll-smooth whitespace-nowrap"
              style={{ scrollBehavior: "smooth" }}
            >
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="inline-block px-3 py-1 border border-[#dedede] rounded-2xl whitespace-nowrap"
                >
                  <p>{category.name}</p>
                </li>
              ))}
            </ul>

            {/* Sağ düymə */}
            <button
              onClick={scrollRight}
              className="md:hidden block absolute right-0 z-10 bg-white p-2 shadow rounded-full"
            >
              <i className="ri-arrow-right-wide-line text-xl"></i>
            </button>
          </nav>
        </div>

        <div className="flex gap-2 ml-4">
          <i className="text-2xl ri-search-line"></i>
          <i
            onClick={() => setIsMobile(!isMobile)}
            className="lg:hidden block text-2xl ri-menu-line"
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
