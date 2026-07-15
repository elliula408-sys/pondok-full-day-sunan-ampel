import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

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
import InformasiPPDB from "./pages/user/InformasiPPDB";

import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import KelolaUser from "./pages/admin/KelolaUser";
import KelolaBerita from "./pages/admin/KelolaBerita";
import KelolaPPDB from "./pages/admin/KelolaPPDB";
import EditPPDB from "./pages/admin/EditPPDB";
import KelolaGaleri from "./pages/admin/KelolaGaleri";
import DetailPPDB from "./pages/admin/DetailPPDB";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/profil"
          element={
            <PublicLayout>
              <Profil />
            </PublicLayout>
          }
        />

        <Route
          path="/berita"
          element={
            <PublicLayout>
              <Berita />
            </PublicLayout>
          }
        />

        <Route
          path="/berita/:slug"
          element={
            <PublicLayout>
              <DetailBerita />
            </PublicLayout>
          }
        />

        <Route
          path="/galeri"
          element={
            <PublicLayout>
              <Galeri />
            </PublicLayout>
          }
        />

        <Route
          path="/kontak"
          element={
            <PublicLayout>
              <Kontak />
            </PublicLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        <Route
          path="/register"
          element={
            <PublicLayout>
              <Register />
            </PublicLayout>
          }
        />

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

        <Route
          path="/informasi"
          element={
            <ProtectedRoute>
              <InformasiPPDB />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <DashboardAdmin />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminProtectedRoute>
              <KelolaUser />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/ppdb"
          element={
            <AdminProtectedRoute>
              <KelolaPPDB />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/ppdb/edit/:id"
          element={
            <AdminProtectedRoute>
              <EditPPDB />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/berita"
          element={
            <AdminProtectedRoute>
              <KelolaBerita />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/galeri"
          element={
            <AdminProtectedRoute>
              <KelolaGaleri />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin/ppdb/:id"
          element={
            <AdminProtectedRoute>
              <DetailPPDB />
            </AdminProtectedRoute>
          }
        />

        <Route path="/admin/login" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
