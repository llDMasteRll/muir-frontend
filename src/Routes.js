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

// Импорт Login page from "./pages/Login";
import Login from "./pages/Login";
import LoginLayout from "./layouts/LoginLayout";

// Импорт ProfileMain page from "./pages/ProfileMain";
import ProfileMain from "./pages/ProfileMain";
import ProfileLayout from "./layouts/ProfileLayout";

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
   {
    path: "/login",
    element: <LoginLayout />,      
    children: [
      { index: true, element: <Login /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      { index: true, element: <ProfileMain /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;