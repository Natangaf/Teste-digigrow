import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import UploadVideo from "../pages/UploadVideo/UploadVideo";
import { useAuth } from "../context/AuthContext";
import Player from "../pages/Player/Player";

export function RoutePages() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/assitindo/:id" element={<Player />} />
      <Route
        path="/upload"
        element={isAuthenticated ? <UploadVideo /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
