import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Beranda from '../pages/Beranda';
import Tentang from '../pages/Tentang';
import Kontak from '../pages/Kontak';
import Bantuan from '../pages/Bantuan';
import Media from '../pages/Media';
import Login from '../pages/Login';

export default function Router() {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Beranda />
            </PrivateRoute>
          }
        />
        <Route
          path="/beranda"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Beranda />
            </PrivateRoute>
          }
        />
        <Route
          path="/tentang"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Tentang />
            </PrivateRoute>
          }
        />
        <Route
          path="/bantuan"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Bantuan />
            </PrivateRoute>
          }
        />
        <Route
          path="/media"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Media />
            </PrivateRoute>
          }
        />
        <Route
          path="/kontak"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Kontak />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
