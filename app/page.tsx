import Image from "next/image";
import { offers } from "@/data/offers";
import { proofProjects } from "@/data/projects";

const inquiryHref =
  "mailto:roblaws@me.com?subject=Project%20inquiry%20for%20Robert%20Laws&body=Hi%20Robert%2C%0A%0AI%27m%20interested%20in%20talking%20about%20a%20workflow%2C%20AI%20tool%2C%20automation%2C%20dashboard%2C%20or%20learning%20project.%0A%0AOrganization%3A%0AWhat%20we%27re%20trying%20to%20improve%3A%0ATimeline%3A%0A%0AThanks%2C";

const audienceFit = [
  "Small organizations with real work to improve, not enterprise procurement theater.",
  "Libraries, education teams, nonprofits, and small businesses with content-heavy workflows.",
  "Teams that need practical prototypes, clear documentation, and steady adoption support.",
  "Leaders who want AI used carefully: useful, explainable, and tied to specific outcomes."
];

const experiments = [
  {
    title: "Workflow prompt kits",
    description:
      "Reusable prompts and checklists for turning messy recurring work into repeatable AI-assisted processes."
  },
  {
    title: "Small-team dashboards",
    description:
      "Opinionated reporting starters for teams that need visibility without adopting a heavy BI stack."
  },
  {
    title: "Learning resource engines",
    description:
      "Lightweight tools for organizing lessons, examples, quizzes, and guides around learner decisions."
  }
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
          <a href="#offers">Offers</a>
          <a href="#proof">Proof</a>
          <a href="#ideas">Ideas</a>
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
          <p className="eyebrow">Robert Laws · AI workflow tools and practical web systems</p>
          <h1>Practical AI workflow tools for small teams.</h1>
          <p>
            I help libraries, education teams, nonprofits, and small businesses
            turn repetitive work into clear processes, lightweight tools, useful
            dashboards, and AI-assisted workflows people can actually use.
          </p>
          <div className="hero__actions" aria-label="Key actions">
            <a className="button button--primary" href="#offers">
              Explore offers
            </a>
            <a className="button button--secondary" href="#proof">
              See proof
            </a>
          </div>
        </div>
      </section>

      <section className="section intro" aria-labelledby="fit-title">
        <div>
          <p className="section-kicker">Best fit</p>
          <h2 id="fit-title">Useful systems for teams that cannot waste time on vague AI strategy.</h2>
        </div>
        <div className="fit-list">
          {audienceFit.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section section--band" id="offers" aria-labelledby="offers-title">
        <div className="section-heading">
          <p className="section-kicker">Productized consulting</p>
          <h2 id="offers-title">Start small, prove value, then make it part of the work.</h2>
          <p>
            Each offer is scoped around a concrete decision point: find the
            opportunity, build the prototype, or help the team adopt it.
          </p>
        </div>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.title}>
              <p className="offer-card__label">{offer.label}</p>
              <h3>{offer.title}</h3>
              <p>{offer.summary}</p>
              <div className="offer-card__detail">
                <span>Best for</span>
                <strong>{offer.idealFor}</strong>
              </div>
              <div className="offer-card__detail">
                <span>Typical shape</span>
                <strong>{offer.timeline}</strong>
              </div>
              <ul>
                {offer.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <a className="text-link" href={inquiryHref}>
                Ask about this offer
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" aria-labelledby="approach-title">
        <div>
          <p className="section-kicker">Approach</p>
          <h2 id="approach-title">Builder, translator, and adoption partner.</h2>
        </div>
        <div className="approach-copy">
          <p>
            My background spans libraries, instructional technology, web
            development, data visualization, and front-end systems. That mix is
            useful for small teams because the hard part is rarely just the code.
          </p>
          <p>
            The work is to understand the process, make the next step visible,
            build something lean, and help people trust it enough to use it.
          </p>
        </div>
      </section>

      <section className="section" id="proof" aria-labelledby="proof-title">
        <div className="section-heading">
          <p className="section-kicker">Proof of work</p>
          <h2 id="proof-title">Past projects, reframed around useful outcomes.</h2>
          <p>
            These are not the offer itself. They show the kind of systems
            thinking, interface work, and practical delivery behind the offers.
          </p>
        </div>
        <div className="proof-grid">
          {proofProjects.map((project) => (
            <article className="proof-card" key={project.title}>
              <div className="proof-card__image">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 980px) 25vw, (min-width: 680px) 50vw, 100vw"
                />
              </div>
              <div className="proof-card__body">
                <div className="proof-card__meta">
                  <span>{project.year}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list" aria-label={`${project.title} proof points`}>
                  {project.proofPoints.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
                <div className="proof-card__links">
                  <a href={project.websiteUrl}>Visit site</a>
                  <a href={project.repositoryUrl}>Repository</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section ideas" id="ideas" aria-labelledby="ideas-title">
        <div className="profile">
          <Image src="/images/rdl.jpg" alt="Robert Laws" width={560} height={560} />
          <div>
            <p className="section-kicker">Ideas and side projects</p>
            <h2 id="ideas-title">Experiments that may become templates, products, or workshops.</h2>
            <p>
              I am also exploring small, useful products that can sit alongside
              consulting work: workflow kits, dashboard starters, and learning
              tools for teams that need momentum without a large platform.
            </p>
          </div>
        </div>
        <div className="experiment-grid">
          {experiments.map((experiment) => (
            <article className="experiment-card" key={experiment.title}>
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Have a workflow worth improving?</h2>
          <p>
            Send a few notes about the team, the friction, and what would be
            easier if the right tool existed.
          </p>
        </div>
        <div className="footer-actions">
          <a className="button button--primary" href={inquiryHref}>
            Start an inquiry
          </a>
          <a href="https://github.com/robert-laws">GitHub</a>
          <a href="mailto:roblaws@me.com">roblaws@me.com</a>
        </div>
      </footer>
    </main>
  );
}
