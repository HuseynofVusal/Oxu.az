import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import LayoutPage from "../layout/LayoutPage";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<Home />} />
    </Route>
  )
);
