function ProjectTable({ projArray, className }) {
  return (
    <table className={className} id="projects">
      <thead>
        <tr>
          <th>Project</th>
          <th>Description</th>
          <th>Language</th>
          <th>Demo</th>
          <th>Request Source Code</th>
          {/* <th>Focus</th> */}
        </tr>
      </thead>
      <tbody>
        {projArray.map((p) => (
          <tr>
            <td>{p.name}</td>
            <td>{p.description}</td>
            <td>{p.language}</td>
            {/* <td>{p.focus}</td> */}
            <td>
              <a href={p.link} title="Watch Demo">
                <img src="src/assets/youtube.svg" className="iconLarge"></img>
              </a>
            </td>
            <td>
              <a
                href={
                  `mailto:sheilakazvini@gmail.com?subject=${p.name}` +
                  `%20Source%20Code` +
                  `&body=Hello!%20I%20would%20like%20to%20see%20the%20source%20code%20for%20your%20project%20` +
                  `${p.name}. Thanks!`
                }
                title="Request Source Code"
              >
                <img src="src/assets/code.svg" className="iconLarge"></img>
              </a>
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
}
export { ProjectTable };

// Have an option to filter by language and focus
