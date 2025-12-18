import { useState } from "react";
import "/src/App.css";
import { DarkModeToggle } from "./DarkModeToggle";
function NavBar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const defaultClasses = "navbar-expand-lg sticky-top";
  let navBarClasses = scrolled
    ? `${defaultClasses} navbar active`
    : `${defaultClasses} navbar`;
  const changeBackground = () => {
    if (window.scrollY >= 145) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navBarClasses}>
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Sheila Kazvini
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#headingAboutMe">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#headingSkills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#headingProjects">
                  Projects
                </a>
              </li>
              <DarkModeToggle dark={dark} toggleDark={toggle}></DarkModeToggle>
            </ul>
            <ul className="navbar-nav" id="iconsNav">
              {/* <DarkModeToggle dark={dark} toggleDark={toggle}></DarkModeToggle> */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="mailto:sheilakazvini@gmail.com"
                  title="Email"
                >
                  <img src="src/assets/email.svg" className="icon"></img>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://linkedin.com/in/sheila-kz"
                  title="Connect On LinkedIn"
                >
                  <img
                    src="src/assets/linkedin-logo.svg"
                    className="icon"
                  ></img>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/sh00000ly"
                  title="Follow On GitHub"
                >
                  <img src="src/assets/github.svg" className="icon"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
