import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/public/Home";
import Profil from "./pages/public/Profil";
import Berita from "./pages/public/Berita";
import DetailBerita from "./pages/public/DetailBerita";
import Galeri from "./pages/public/Galeri";
import Kontak from "./pages/public/Kontak";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/user/Dashboard";
import Pendaftaran from "./pages/user/Pendaftaran";
import DashboardUser from "./pages/user/DashboardUser";

import AdminLayout from "./layouts/AdminLayout";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import KelolaBerita from "./pages/admin/KelolaBerita";
import KelolaPPDB from "./pages/admin/KelolaPPDB";
import KelolaGaleri from "./pages/admin/KelolaGaleri";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profil" element={<Profil />} />

        <Route path="/berita" element={<Berita />} />

        <Route path="/berita/:id" element={<DetailBerita />} />

        <Route path="/galeri" element={<Galeri />} />

        <Route path="/kontak" element={<Kontak />} />

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
        <Route
          path="/pendaftaran"
          element={
            <ProtectedRoute>
              <Pendaftaran />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <DashboardUser />
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
