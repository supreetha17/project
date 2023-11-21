import React from "react";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import leaves from "./leaves.mp4";
import LayoutComponents from "./LayoutComponents";

const Layout = ({ children }) => (
  <div
    style={{
      position: "relative",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    >
      <source src={leaves} type="video/mp4" />
    </video>
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Routes>
          <Route index element={<LoginPage />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Routes>
          <Route index element={<Signup />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Routes>
          <Route index element={<LayoutComponents />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
]);

export default router;
