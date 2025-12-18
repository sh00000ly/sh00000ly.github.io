import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { getProjects } from "./project-accessor";
import { ProjectTable } from "./components/ProjectTable";
import { NavBar } from "./components/NavBar";

import "./App.css";

function App() {
  function toggleDark() {
    setDarkMode(!darkMode);
    // console.log(darkMode);
    // console.log(containerClasses);
  }
  let projects = getProjects();
  const [darkMode, setDarkMode] = useState(false);
  // dynamic classes - default classes for each element, then append the dark mode class if darkMode is true
  // Navbar, About Me, Project Table
  let containerClasses = darkMode
    ? "container darkMode"
    : "container lightMode";
  let tableClasses = darkMode
    ? "table table-striped darkMode"
    : "table table-striped lightMode";
  let navClass = darkMode ? "darkMode" : "lightMode";
  return (
    <>
      <div className="text-center" id="header">
        <h1 className="display-4">Sheila Kazvini</h1>
        <h5 className="lead">
          Junior Full-Stack Software Developer based in Saint John, New
          Brunswick
        </h5>
      </div>
      <NavBar className={navClass} dark={darkMode} toggle={toggleDark}></NavBar>
      <div className={containerClasses} id="container">
        <div className="block">
          <h3 id="headingAboutMe">About Me</h3>
          <div id="aboutMe">
            <div id="blurb" className={navClass}>
              <p id="aboutMeParagraph">
                Hey there! I'm Sheila, a student full-stack software developer
                living in Saint John, New Brunswick, CA.{" "}
              </p>
              <p>
                <span>
                  I am currently in my second year of the Software Dev program
                  at NBCC, graduating in June 2026. My goal is to write
                  <p id="blurbLine">
                    efficient and robust code that follows best practices and
                    prioritizes a positive user experience.
                  </p>
                </span>
              </p>
              <p>
                My most cherished skills are my ability to solve problems, my
                persistence, and my interpersonal skills. I am most proficient
                in C# and JavaScript, and using the MERN (MongoDB, Express,
                React.js, Node.js) stack to write basic apps, with basic working
                proficiency in Java and C++.
              </p>
              <p>
                My hobbies include programming (of course!) with an interest in
                embedded systems and game development, drawing digital artwork
                (including pixel art), gaming, and photography.
              </p>
            </div>
            <img src="./portfolio/headshot-circle.jpg" id="headshot"></img>
          </div>
          <hr></hr>
          <div className="block">
            <h3 id="headingSkills">I am comfortable working with...</h3>
            <div id="logos">
              <img src="./portfolio/cs.svg" id="csLogo"></img>
              <img src="./portfolio/cpp.png" id="cppLogo"></img>
              <img src="./portfolio/mern.png" id="mernPic"></img>
              <img src="./portfolio/arduion.png" id="ardLogo"></img>
              <img src="./portfolio/springboot.svg" id="sprLogo"></img>
              <img src="./portfolio/PHP-logo.svg" id="phpLogo"></img>
              <img src="./portfolio/git.png" id="gitLogo"></img>
            </div>
            <p className="lead text-center" id="learnBlurb">
              and always willing to push forward + learn new frameworks,
              languages, and skills
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="block">
          <div id="projectsDiv">
            <h3 id="headingProjects">Projects</h3>
            <p id="projectBlurb" className={navClass}>
              The following table shows the list of some projects that I
              completed in my Fall 2025 semester in the Software Development
              program. At my instructors' request, the code is only available to
              employers upon request, rather than publicly available on GitHub
              :)
            </p>
            <ProjectTable
              projArray={projects}
              className={tableClasses}
            ></ProjectTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
