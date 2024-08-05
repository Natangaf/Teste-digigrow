import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
