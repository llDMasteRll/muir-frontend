// routes.js
import React, { useMemo } from "react";
import { createBrowserRouter } from "react-router-dom";

// Импорт компонентов страниц
import HomePage from "./pages/Home";
// import CoursesPage from "./pages/CoursesPage";
// import NewsPage from "./pages/NewsPage";
// import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFound";
import CaptainMainPage from "./pages/CaptainMain";
import CaptainAdd from "./pages/CaptainAdd";

// Импорт layout (если есть)
import RootLayout from "./layouts/RootLayout";
import CaptainLayout from "./layouts/CaptainLayout";

const links = {
  landing: "/",
  captain: "/captain",
  statistic: "./statistic", //for captain page
  add: "./add", //for captain page
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // общий layout с header/footer
    children: [
      { index: true, element: <HomePage /> },
      //   { path: "courses", element: <CoursesPage /> },
      //   { path: "news", element: <NewsPage /> },
      //   { path: "contacts", element: <ContactsPage /> },
      { path: "*", element: <NotFoundPage /> }, // fallback
    ],
  },
  {
    path: "/captain",
    element: <CaptainLayout links={links} />,
    children: [
      { index: true, element: <CaptainMainPage links={links} /> },
      { path: "add", element: <CaptainAdd links={links} /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
