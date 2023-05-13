import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import MainNav from "../components/Layout/MainNav";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
