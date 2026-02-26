// routes.js
import React, { useMemo } from "react";
import { createBrowserRouter } from "react-router-dom";

// Импорт компонентов страниц
import HomePage from "./pages/Home";
// import NewsPage from "./pages/NewsPage";
// import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFound";
import CaptainMainPage from "./pages/CaptainMain";
import CaptainAdd from "./pages/CaptainAdd";
import CoursesPage from "./pages/Courses"

// Импорт Login page from "./pages/Login";
import Login from "./pages/Login";
import LoginLayout from "./layouts/LoginLayout";
import Crew from "./pages/Crew";
import Company from "./pages/Company";
import Master from "./pages/Master";

// Импорт layout (если есть)
import RootLayout from "./layouts/RootLayout";
import CaptainLayout from "./layouts/CaptainLayout";

import ProfileMain from "./pages/ProfileMain";
import ProfileLayout from "./layouts/ProfileLayout";

const links = {
  landing: "/",
  captain: "/captain",
  statistic: "./statistic", //for captain page
  add: "./add", //for captain page
  profile: "/profile",
  courses: "/courses",
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
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login/company",
    element: <LoginLayout />,
    children: [
      { index: true, element: <Company /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login/master",
    element: <LoginLayout />,
    children: [
      { index: true, element: <Master /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/login/crew",
    element: <LoginLayout />,
    children: [
      { index: true, element: <Crew /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout links={ links } />,
    children: [
      { index: true, element: <ProfileMain /> },
      { path: "courses", element: <CoursesPage links={links} /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;