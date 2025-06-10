import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import "./index.css";

// Components
import Main from "@components/Layout/Main.jsx";
import Home from "@views/Home/Index.jsx";
import About from "@views/About/Index.jsx";
import Contact from "@views/Contact/Index.jsx";
import UserDetail from "@views/User/Detail/Index.jsx";
import Github from "@views/Github/Index.jsx";

// Methods
import { getGitRecord } from "./views/Github/Index";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="users/:id" element={<UserDetail />} />
      <Route
        loader={getGitRecord}
        path="github"
        element={<Github />}
        HydrateFallback={() => {
          return <p>Loading Game...</p>;
        }}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
