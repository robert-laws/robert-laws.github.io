export type Project = {
  title: string;
  year: string;
  description: string;
  image: string;
  websiteUrl: string;
  repositoryUrl: string;
  features: string[];
  techStack: string[];
};

export const projects: Project[] = [
  {
    title: "Data Viz Portal",
    year: "2022",
    description:
      "A React and Firebase learning portal with quizzes, polls, authentication, and data visualization resources.",
    image: "/images/project/data-viz-portal-home-page.png",
    websiteUrl: "https://data-viz-portal.web.app/",
    repositoryUrl: "https://github.com/robert-laws/project-jan-2022-data-viz-portal",
    features: [
      "React hooks and context",
      "Firebase authentication and database",
      "React Google Charts integration"
    ],
    techStack: ["React", "Firebase", "Context API"]
  },
  {
    title: "Creativity Launchpad",
    year: "2021",
    description:
      "A resource site for multimedia projects, built around accessible content discovery and responsive layouts.",
    image: "/images/project/creativity-launchpad-project.jpg",
    websiteUrl: "https://creativity-launchpad.guqlibrary.georgetown.domains",
    repositoryUrl: "https://github.com/robert-laws/project-sep-2021-creativity-launchpad",
    features: [
      "Interactive resource lists",
      "Accessibility-minded interface patterns",
      "Responsive CSS Grid and Flexbox layout"
    ],
    techStack: ["CSS Grid", "Fetch API"]
  },
  {
    title: "Lesson Builder",
    year: "2021",
    description:
      "A lesson planning application for building customized instruction plans from reusable content blocks.",
    image: "/images/project/lesson-builder-home-page.png",
    websiteUrl: "https://lesson-builder.guqlibrary.georgetown.domains/",
    repositoryUrl: "https://github.com/robert-laws/project-apr-2021-lesson-plan-builder",
    features: [
      "React front end with hooks",
      "Headless WordPress content source",
      "JWT-authenticated editing flow"
    ],
    techStack: ["React", "Tailwind CSS", "WordPress REST API", "JWT"]
  },
  {
    title: "Checkmark List",
    year: "2020",
    description:
      "A classic to-do application with account-based list management, Firestore persistence, and responsive UI.",
    image: "/images/project/checkmark-list-app-home-page.jpg",
    websiteUrl: "https://project-sep-2020-todo-app.netlify.app/",
    repositoryUrl: "https://github.com/robert-laws/project-sep-2020-checkmark-list-app",
    features: [
      "React single-page application",
      "CRUD actions using Firebase Firestore",
      "Authentication with Firebase Auth"
    ],
    techStack: ["React", "Firebase", "Tailwind CSS", "Context API"]
  },
  {
    title: "Data Viz Cafe",
    year: "2021",
    description:
      "A cafe-themed learning site that introduces data visualization concepts through a familiar ordering pattern.",
    image: "/images/project/data-viz-cafe-home-page.png",
    websiteUrl: "https://data-viz-cafe.libtech.georgetown.domains/",
    repositoryUrl: "https://github.com/robert-laws/project-jan-2021-data-viz-cafe",
    features: [
      "React hooks",
      "Bulma component styling",
      "Instructional content model"
    ],
    techStack: ["React", "Bulma", "Context API"]
  },
  {
    title: "Instruction Menu",
    year: "2019",
    description:
      "An interactive menu for faculty to select library instruction segments and assemble a class plan.",
    image: "/images/project/instruction-menu-project.jpg",
    websiteUrl: "https://menu.guqlibrary.georgetown.domains",
    repositoryUrl: "https://github.com/robert-laws/project-instruction-menu-documentation",
    features: [
      "Drag-and-drop instruction selection",
      "JSON-backed content",
      "Responsive planning workflow"
    ],
    techStack: ["jQuery", "jQuery UI", "PHP", "HTML5"]
  }
];
