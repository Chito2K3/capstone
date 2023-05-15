import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MealsNavigation from "../components/Layout/MealsNavigation";
import PageHero from "../components/Layout/PageHero";
import MenuHero from "../assets/menuhero.jpg";

function MenuRootLayout() {
  return (
    <Fragment>
      <PageHero image={MenuHero} alt={"Delicious Meals"} />
      <MealsNavigation
        title={"We Deliver!"}
        message={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officiis! Laboriosam veniam beatae eligendi dolorum blanditiis aliquid recusandae provident eius illum, fugit rerum pariatur quod minima ullam corrupti odio expedita.
          </p>
        }
      />
      <Outlet />
    </Fragment>
  );
}

export default MenuRootLayout;
