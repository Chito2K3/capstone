import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import HomePage, { loader as testimonialsLoader } from "./pages/Home";
import LoginPage from "./pages/Login";
import BookingPage from "./pages/Booking";
import RootLayout from "./pages/Root";
import MenuRootLayout from "./pages/MenuRoot";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: "root",
      children: [
        { index: true, element: <HomePage />, loader: testimonialsLoader },
        { path: "about", element: <AboutPage /> },
        { path: "menu", element: <MenuRootLayout /> },
        { path: "reservations", element: <BookingPage /> },
        { path: "login", element: <LoginPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
