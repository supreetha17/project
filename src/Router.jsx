// // import { createBrowserRouter } from "react-router-dom";
// // import NavBar from "./Home/NavBar";
// // import LoginPage from "./LoginPage";
// // import Signup from "./Signup";

// // const router = createBrowserRouter([
// //   { path: "/home", element: <NavBar /> },
// //   { path: "/", element: <LoginPage /> },
// //   { path: "/signup", element: <Signup /> },
// // ]);

// // export default router;

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
          {/* <Route index element={<NavBar />} /> */}
          <Route index element={<LayoutComponents />} />
        </Routes>
      </Layout>
    ),
    children: [],
  },
]);

export default router;

// import React from "react";
// import { createBrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import Signup from "./Signup";
// // import LayoutComponents from "./LayoutComponents";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <LayoutComponents>
//         <Routes>
//           <Route index element={<LoginPage />} />
//         </Routes>
//       </LayoutComponents>
//     ),
//     children: [],
//   },
//   {
//     path: "/signup",
//     element: (
//       // <LayoutComponents>
//         <Routes>
//           <Route index element={<Signup />} />
//         </Routes>
//       // </LayoutComponents>
//     ),
//     children: [],
//   },
//   // Add more routes as needed
// ]);

// export default router;

// import { createBrowserRouter } from "react-router-dom";
// // import NavBar from "./Project/NavBar";
// // import LoginPage from "./Project/LoginPage";
// // import Signup from "./Project/Signup";
// import LinkLogin from "./LinkLogin";
// import App from "./App";
// import Linksignup from "./LinkSignup";
// //import Sample from "./Project/Sample";
// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <App />,
//   },
//   // { path: "./home", element: <Footer /> },
//   { path: "/", element: <LinkLogin /> },
//   { path: "/signup", element: <Linksignup /> },
// ]);

// export default router;
