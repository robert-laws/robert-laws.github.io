export type Offer = {
  title: string;
  label: string;
  summary: string;
  idealFor: string;
  timeline: string;
  outcomes: string[];
};

export const offers: Offer[] = [
  {
    title: "Workflow Opportunity Audit",
    label: "Diagnose",
    summary:
      "Map the manual, repetitive, or unclear parts of a team's work and identify where AI, automation, or a small internal tool could help.",
    idealFor: "Teams that know work is slower than it should be but are not sure what to build first.",
    timeline: "1-2 weeks",
    outcomes: [
      "Workflow inventory and pain-point map",
      "Ranked AI and automation opportunities",
      "Practical next-step roadmap"
    ]
  },
  {
    title: "Prototype Sprint",
    label: "Build",
    summary:
      "Turn one high-value workflow idea into a usable prototype, internal tool, dashboard, or AI-assisted process.",
    idealFor: "Teams that need proof before investing in a larger system or ongoing process change.",
    timeline: "2-4 weeks",
    outcomes: [
      "Working prototype or tool",
      "Clear handoff documentation",
      "Recommended path to production"
    ]
  },
  {
    title: "Adoption Retainer",
    label: "Improve",
    summary:
      "Support the messy middle after launch: training, documentation, iteration, maintenance, and practical workflow adoption.",
    idealFor: "Teams that have a useful tool or process but need it to become part of everyday work.",
    timeline: "Monthly",
    outcomes: [
      "Iteration backlog and improvements",
      "User guidance and training assets",
      "Lightweight support for real-world use"
    ]
  }
];
