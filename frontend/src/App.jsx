import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/public/Home";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/user/Dashboard";

import KelolaBerita from "./pages/admin/KelolaBerita";

import AdminLayout from "./layouts/AdminLayout";

import DashboardAdmin from "./pages/admin/DashboardAdmin";

import KelolaPPDB from "./pages/admin/KelolaPPDB";

import KelolaGaleri from "./pages/admin/KelolaGaleri";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />

          <Route path="ppdb" element={<KelolaPPDB />} />

          <Route path="berita" element={<KelolaBerita />} />

          <Route path="galeri" element={<KelolaGaleri />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
