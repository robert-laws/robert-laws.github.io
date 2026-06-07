export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  websiteUrl: string;
  repositoryUrl: string;
  proofPoints: string[];
};

export const proofProjects: Project[] = [
  {
    title: "Data Viz Portal",
    year: "2022",
    category: "Learning platform",
    description:
      "A quiz, polling, and resource portal for helping learners practice data visualization concepts.",
    image: "/images/project/data-viz-portal-home-page.png",
    websiteUrl: "https://data-viz-portal.web.app/",
    repositoryUrl: "https://github.com/robert-laws/project-jan-2022-data-viz-portal",
    proofPoints: ["User accounts", "Learning checks", "Interactive charts"]
  },
  {
    title: "Lesson Builder",
    year: "2021",
    category: "Workflow tool",
    description:
      "A reusable lesson-planning tool for assembling instructional plans from modular content blocks.",
    image: "/images/project/lesson-builder-home-page.png",
    websiteUrl: "https://lesson-builder.guqlibrary.georgetown.domains/",
    repositoryUrl: "https://github.com/robert-laws/project-apr-2021-lesson-plan-builder",
    proofPoints: ["Reusable content", "Headless CMS", "Authenticated editing"]
  },
  {
    title: "Creativity Launchpad",
    year: "2021",
    category: "Resource hub",
    description:
      "A multimedia project resource site designed around accessible discovery and clear project support.",
    image: "/images/project/creativity-launchpad-project.jpg",
    websiteUrl: "https://creativity-launchpad.guqlibrary.georgetown.domains",
    repositoryUrl: "https://github.com/robert-laws/project-sep-2021-creativity-launchpad",
    proofPoints: ["Resource discovery", "Accessible patterns", "Responsive layout"]
  },
  {
    title: "Instruction Menu",
    year: "2019",
    category: "Decision workflow",
    description:
      "An interactive planning system for selecting library instruction segments and assembling class sessions.",
    image: "/images/project/instruction-menu-project.jpg",
    websiteUrl: "https://menu.guqlibrary.georgetown.domains",
    repositoryUrl: "https://github.com/robert-laws/project-instruction-menu-documentation",
    proofPoints: ["Drag and drop", "Structured content", "Faculty-facing workflow"]
  }
];
