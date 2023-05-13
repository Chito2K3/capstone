import { Fragment } from "react";
import { json } from "react-router-dom";
import AboutBrief from "../components/GeneralSections/AboutBrief";
import Testimonials from "../components/GeneralSections/Testimonials";
import MainHeroSection from "../components/Layout/MainHeroSection";

function HomePage() {
  return (
    <Fragment>
      <MainHeroSection />
      <div>
        
        <Testimonials />
        <AboutBrief />
      </div>
    </Fragment>
  );
}

export default HomePage;

export async function loader() {
  const response = await fetch("http://localhost:3500/testimonials.json");
  if (!response.ok) {
    return json({ message: "Could not fetch testimonials" }, { status: 500 });
  } else {
    const resData = await response.json();

    let testimonials = [];

    for (const key in resData) {
      testimonials.push({
        id: key,
        ...resData[key],
      });
    }

    return testimonials;
  }
}
