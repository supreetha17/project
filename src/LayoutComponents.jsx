import React from "react";
import NavBar from "./Home/NavBar.jsx";
import Footer from "./Home/Footer";
import Main from "./Home/Main";

const LayoutComponents = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <NavBar />
    <div style={{ flex: 1 }}>{children}</div>
    <Main />

    <div style={{ flex: 1 }}>{children}</div>
    <Footer />
  </div>
);

export default LayoutComponents;
