import React, { useEffect, useState } from "react";
import { getAllNews } from "../service/service";

const Home = () => {
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getAllNews();

      setNews(data.news);
    };
    fetchNews();
  }, []);

  const newsActionFunc = (id, action) => {
    console.log(`News ID: ${id}, Action: ${action}`);
    // Burada backend-ə API göndərə bilərsən
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:pl-[76px] px-5 py-10">
      {news &&
        news?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col shadow-lg rounded-md overflow-hidden"
          >
            <div>
              <img
                className="h-[200px] object-cover w-full"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col bg-[#fafafa] border h-full border-[#dedede]">
              <div className="flex py-2 mt-2 text-[#777] gap-4 px-3 text-sm uppercase">
                <span>
                  <i className="ri-calendar-line mr-1"></i>
                  {item.createdAt.split("T")[0]}{" "}
                  {item.createdAt.split("T")[1].split(".")[0]}
                </span>
                <span className="normal-case">
                  <i className="ri-eye-fill mr-1"></i>
                  {item.views}
                </span>
              </div>
              <p className="py-1 font-bold text-2xl px-3 line-clamp-3">
                {item.title}
              </p>
              <div className="flex justify-between items-end py-4 px-3 mt-auto">
                <p className="text-[#1894A0] uppercase font-semibold tracking-[1.5px] text-sm">
                  {item.category?.name}
                </p>
                <div className="flex gap-10">
                  <span
                    onClick={() => newsActionFunc(item.id, "like")}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-thumb-up-fill mr-1"></i>
                    {item.like}
                  </span>
                  <span
                    onClick={() => newsActionFunc(item.id, "dislike")}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-thumb-down-fill mr-1"></i>
                    {item.dislike}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
