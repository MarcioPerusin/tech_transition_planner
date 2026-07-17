// src/data/roadmapData.js
const roadmapData = [
  {
    id: 1,
    title: "Web Development Full Stack",
    institution: "TripleTen",
    hours: 480,
    progress: 72,
    status: "In progress",
    dueDate: "30/09/2026",
    color: "#2563eb",

    timeline: [
      {
        id: 1,
        title: "HTML and CSS Fundamentals",
        description:
          "Semantic structure, responsive layouts, and BEM methodology.",
        date: "15/02/2026",
        hours: 80,
        progress: 100,
        status: "completed",
      },
      {
        id: 2,
        title: "JavaScript",
        description:
          "Logic, DOM, events, modules, and asynchronous programming.",
        date: "30/04/2026",
        hours: 120,
        progress: 100,
        status: "completed",
      },
      {
        id: 3,
        title: "React",
        description:
          "Components, properties, state, hooks, and routes.",
        date: "30/06/2026",
        hours: 100,
        progress: 72,
        status: "in-progress",
      },
      {
        id: 4,
        title: "Node.js and Express",
        description:
          "Creation of REST APIs and database integration.",
        date: "31/08/2026",
        hours: 100,
        progress: 0,
        status: "pending",
      },
      {
        id: 5,
        title: "Deploy Full Stack",
        description:
          "Deployment, Nginx, PM2, HTTPS, and cloud infrastructure.",
        date: "30/09/2026",
        hours: 80,
        progress: 0,
        status: "locked",
      },
    ],
  },
  {
    id: 2,
    title: "Data Scientist Training Program",
    institution: "Data Science Academy",
    hours: 350,
    progress: 100,
    status: "Completed",
    dueDate: "15/11/2021",
    color: "#16a34a",
  },
];

export default roadmapData;