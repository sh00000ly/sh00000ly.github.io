function DarkModeToggle({ dark, toggleDark }) {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        id="darkModeIcon"
        onClick={toggleDark}
        title="Toggle Dark Mode"
      >
        {dark ? (
          <img src="/portfolio/moon.svg" className="icon"></img>
        ) : (
          <img src="/portfolio/sun.svg" className="icon"></img>
        )}
      </a>
    </li>
  );
}

export { DarkModeToggle };

// Light/dark mode toggle
// Another change
