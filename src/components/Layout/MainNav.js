import { NavLink, Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import Logo from "../../assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { Fragment, useState } from "react";
import DropMenu from "./DropMenu";

function MainNav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function closeDropMenu() {
    setToggleMenu(false);
  }
  function showDropMenu() {
    setToggleMenu(true);
  }
  return (
    <Fragment>
      <header className={classes.header}>
        <nav className={classes["nav-items"]}>
          <span className={classes.logo}>
            <Link to="/">
              <img src={Logo} alt="Little Lemon Logo" />
            </Link>
          </span>
          <ul className={classes.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reservations"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Log In
              </NavLink>
            </li>
          </ul>
          </nav>
      </header>
      <header className={classes["alt-header"]}>
        <nav className={classes["alt-navitems"]}>
          <span className={classes.menu}>
            {toggleMenu ? (
              <span className={classes.toggleLinks}>
                <RiCloseLine onClick={closeDropMenu} />
              </span>
            ) : (
              <span className={classes.toggleLinks}>
                <GiHamburgerMenu onClick={showDropMenu} />
              </span>
            )}
            {toggleMenu && <DropMenu onClick={closeDropMenu} />}
          </span>
          <span className={classes.logo}>
            <Link>
              <img src={Logo} alt="Little Lemon Logo" />
            </Link>
          </span>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNav;
