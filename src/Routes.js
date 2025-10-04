// routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Импорт компонентов страниц
import HomePage from "./pages/Home";
// import CoursesPage from "./pages/CoursesPage";
// import NewsPage from "./pages/NewsPage";
// import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFound";
import CaptainMainPage from "./pages/CaptainMain";

// Импорт layout (если есть)
import RootLayout from "./layouts/RootLayout";
import CaptainLayout from "./layouts/CaptainLayout";

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
    path: "/captain_main",
    element: <CaptainLayout />,
    children: [
      { index: true, element: <CaptainMainPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
