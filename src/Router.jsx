import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import Employee from "./pages/Employee.jsx";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  return isAuthenticated ? children : <Navigate to="/" />;
};
/*const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("token") ? true : false;
  return isAuthenticated ? children : <Navigate to="/" />;
};*/

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <Layout>
                <Employee />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/timeline"
          element={
            <ProtectedRoute>
              <Layout>
                <h1>Timeline</h1>
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaves"
          element={
            <ProtectedRoute>
              <Layout>
                <h1>Leaves</h1>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
