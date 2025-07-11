import axios from "axios";

export const getAllCategories = async () => {
  let result = await axios.get("https://news.drafts.az/api/category");
  return result.data;
};

export const getAllNews = async () => {
  let result = await axios.get("https://news.drafts.az/api/news");
  return result.data;
};
