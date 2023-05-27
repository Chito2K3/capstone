import { json, Outlet, ScrollRestoration } from "react-router-dom";
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

export async function loader() {
  const response = await fetch(
    "https://test-api-7zf8.onrender.com/meals.json"
  );

  if (!response.ok) {
    return json({ message: "Could not fetch meals!" }, { status: 500 });
  } else {
    const resData = await response.json();

    let meals = [];

    for (const key in resData) {
      meals.push({
        id: key,
        ...resData[key],
      });
    }
    return meals;
  }
}
