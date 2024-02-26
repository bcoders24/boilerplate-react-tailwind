import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import Employee from "./pages/Employee.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/employee"
          element={
            <Layout>
              <Employee />
            </Layout>
          }
        />
        <Route
          path="/timeline"
          element={
            <Layout>
              <h1>Timeline</h1>
            </Layout>
          }
        />
        <Route
          path="/leaves"
          element={
            <Layout>
              <h1>Leaves</h1>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
