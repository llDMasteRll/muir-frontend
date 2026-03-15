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
import CoursesPage from "./pages/Courses.jsx";

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

import CompanyPageVessels from "./pages/CompanyPageVessels";
import CompanyDashboard from "./pages/CompanyDashboard"
import CompanyLayout from "./layouts/CompanyLayout";

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
    ],
  },
  {
    path: "/captain",
    element: <CaptainLayout links={links} />,
    children: [
      { index: true, element: <CaptainMainPage links={links} /> },
      { path: "add", element: <CaptainAdd links={links} /> },
    ],
  },
  {
    path: "login",
    element: <LoginLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "company", element: <Company /> },
      { path: "master", element: <Master /> },
      { path: "crew", element: <Crew /> },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      { index: true, element: <ProfileMain /> },
      { path: "courses", element: <CoursesPage /> },
    ],
  },
  {
    path: "company",
    element: <CompanyLayout />,
    children: [
      { index: true, element: "" },
      { path: "vessels", element: <CompanyPageVessels /> },
      { path: "dashboard", element: <CompanyDashboard /> },
    ],
  },
  { 
    path: "*", 
    element: <NotFoundPage /> 
  },
]);

export default router;
