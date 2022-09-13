import {
    Routes,
    Route,
  } from "react-router-dom";
  import Home from "../page/home";
  import Layout from "../page/pages/layout";

export default function HomeRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="pages" element={<Layout />} />
    </Routes>
  )
}
