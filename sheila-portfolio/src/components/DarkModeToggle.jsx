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
          <img src="src/assets/moon.svg" className="icon"></img>
        ) : (
          <img src="src/assets/sun.svg" className="icon"></img>
        )}
      </a>
    </li>
  );
}

export { DarkModeToggle };
