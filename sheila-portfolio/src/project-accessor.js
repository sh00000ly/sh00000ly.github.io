const projects = [
  {
    projectID: 1,
    name: "Restaurant CRUD App (MERN)",
    description:
      "A restaurant CRUD (Create, Read, Update, Delete) app built in the Node environment using React for front-end and Express + MongoDB for back-end",
    language: "JavaScript",
    focus: "MERN Stack Development",
    link: "https://youtu.be/iBRLlJhaln0",
  },
  {
    projectID: 2,
    name: "Java App Deployment on Ubuntu Server",
    description:
      "Successfully deployed an application (with login, logout, verification + CRUD operations) onto a shared remote Ubuntu server, complete with a logger",
    language: "Java",
    focus: "App Deployment",
  },
  {
    projectID: 3,
    name: "REST Java App",
    description:
      "Wrote a REST controller allowing the user to perform CRUD operations on items from a database from a web-based application",
    language: "Java",
    focus: "REST Programming",
  },
  {
    projectID: 4,
    name: "Spring MVC CRUD App",
    description:
      "Fleshed out controllers, wrote handlers for endpoints, and implemented CRUD functionality. Used Thymeleaf EL to bind models to views.",
    language: "Java",
    focus: "MVC Architecture in Java",
  },
  {
    projectID: 7,
    name: "Tournament Registration App",
    description:
      "Worked with a group of my classmates to create an MVC-based sports tournament registration app using authentication and CRUD operations for Sports Teams and Players",
    language: "C#",
    focus: "MVC Architecture in C#",
  },
  {
    projectID: 8,
    name: "Social Media App",
    description:
      "Implemented repost functionality, populating feed with posts depending on who the user is following, and made use of sessions to track data ",
    language: "PHP",
    focus: "Web Development in PHP",
  },
  {
    projectID: 9,
    name: "Basic Console Games App",
    description:
      "Wrote a basic console app where the user can choose from a selection of simple text minigames.",
    language: "C++",
    focus: "C++ Basics",
  },
  {
    projectID: 10,
    name: "Ordered List Implementation",
    description: "Wrote and implemented an Ordered List data structure in C++.",
    language: "C++",
    focus: "C++ Basics",
  },
];

function getProjects() {
  return projects;
}

export { getProjects };
