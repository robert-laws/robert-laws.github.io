import Image from "next/image";
import { projects } from "@/data/projects";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Firebase",
  "Data visualization",
  "Accessibility",
  "Instructional design",
  "Library technology"
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Robert Laws home">
          <Image src="/images/logo-symbol.png" alt="" width={44} height={44} priority />
          <span>Robert Laws</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="/images/hero-1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
        </div>
        <div className="hero__content">
          <p className="eyebrow">Web development, learning systems, and library technology</p>
          <h1>Robert Laws</h1>
          <p>
            I build practical web experiences for people working with information,
            instruction, research, and data. My work sits where front-end development,
            UX, and teaching overlap.
          </p>
          <div className="hero__actions" aria-label="Key actions">
            <a className="button button--primary" href="#work">
              View projects
            </a>
            <a className="button button--secondary" href="https://github.com/robert-laws">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <div>
          <p className="section-kicker">Focus</p>
          <h2 id="intro-title">Interfaces for learning, discovery, and decision-making.</h2>
        </div>
        <p>
          Since the late 1990s, I have worked across libraries, educational
          technology, web publishing, and application development. I care about
          clear information architecture, resilient front ends, accessible
          interaction patterns, and tools that make complex work easier to do.
        </p>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2 id="work-title">Portfolio projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__image">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100vw"
                />
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span>{project.year}</span>
                  <span>{project.techStack[0]}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="tag-list" aria-label={`${project.title} technology stack`}>
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a href={project.websiteUrl}>Visit site</a>
                  <a href={project.repositoryUrl}>Repository</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="about" aria-labelledby="about-title">
        <div>
          <p className="section-kicker">About</p>
          <h2 id="about-title">A developer with a library and teaching background.</h2>
          <p>
            My career started in libraries and grew through web publishing,
            application development, data visualization instruction, and hands-on
            support for researchers and students. That background keeps my work
            grounded in real workflows, not just screens.
          </p>
        </div>
        <div className="profile">
          <Image src="/images/rdl.jpg" alt="Robert Laws" width={560} height={560} />
          <div>
            <h3>What I bring</h3>
            <ul>
              <li>Front-end development with React and modern JavaScript</li>
              <li>UX planning for content-rich and instructional products</li>
              <li>Comfort working between stakeholders, systems, and learners</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section skills" aria-labelledby="skills-title">
        <div>
          <p className="section-kicker">Toolbox</p>
          <h2 id="skills-title">Technology and practice areas</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s build useful web experiences.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:roblaws@me.com">roblaws@me.com</a>
          <a href="https://github.com/robert-laws">GitHub</a>
          <a href="https://x.com/robdlaws">X</a>
        </div>
      </footer>
    </main>
  );
}
