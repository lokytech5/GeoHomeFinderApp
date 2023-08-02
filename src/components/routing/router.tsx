import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import Layout from "../Layout";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import ApartmentPage from "../../pages/ApartmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "apartment", element: <ApartmentPage /> },
    ],
  },
]);

export default router;
