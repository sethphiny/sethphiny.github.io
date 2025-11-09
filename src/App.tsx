import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import 'yet-another-react-lightbox/styles.css'
import conglexImage1 from './assets/projects/conglex/image_original_1.png'
import conglexImage2 from './assets/projects/conglex/image_original_2.png'
import rentEaseImage1 from './assets/projects/rentease/image_original_1.png'
import rentEaseImage2 from './assets/projects/rentease/image_original_2.png'
import rentEaseImage3 from './assets/projects/rentease/image_original_3.png'
import resumePdf from './assets/docs/Seth_Phinehas_Resume.pdf'
import './App.css'

const VerifiedBadge = () => (
  <span className="badge badge--verified" aria-label="Verified profile">
    <svg viewBox="0 0 20 20" role="presentation" aria-hidden="true">
      <path d="M8.999 16.897a1 1 0 0 0 2.002 0l.23-1.676a1 1 0 0 1 .693-.82l1.585-.503a1 1 0 0 0 .53-1.52l-.948-1.38a1 1 0 0 1 .053-1.185l1.065-1.328a1 1 0 0 0-.6-1.599l-1.64-.246a1 1 0 0 1-.81-.627l-.594-1.55a1 1 0 0 0-1.852 0l-.594 1.55a1 1 0 0 1-.81.627l-1.64.246a1 1 0 0 0-.6 1.599l1.064 1.328a1 1 0 0 1 .054 1.185l-.95 1.38a1 1 0 0 0 .532 1.52l1.585.502a1 1 0 0 1 .693.821l.231 1.676z" />
      <path
        d="M13.707 8.293a1 1 0 0 0-1.414-1.414L9.5 9.672 8.207 8.379a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
        className="badge__check"
      />
    </svg>
  </span>
)

type NavigationLink = {
  label: string
  href: string
}

type SocialLink = {
  label: string
  href: string
}

type Project = {
  title: string
  description: string
  tech: string[]
  href?: string
  media?: string[]
}

type Experience = {
  role: string
  company: string
  start: string
  end: string
  summary: string
  highlights: string[]
}

const navigation: NavigationLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sethphiny/' },
  { label: 'GitHub', href: 'https://github.com/sethphiny' },
  { label: 'Resume', href: resumePdf },
]

const skills = [
  'Node.js & TypeScript',
  'Express.js & REST APIs',
  'GraphQL',
  'PostgreSQL & MySQL',
  'Redis & MongoDB',
  'Kafka & RabbitMQ',
  'AWS (EC2, S3)',
  'Docker & Kubernetes',
  'CI/CD & GitHub Actions',
  'Observability & Tracing',
]

const experiences: Experience[] = [
  {
    role: 'Backend Engineer',
    company: 'Chainconsults',
    start: 'Apr 2021',
    end: 'Present',
    summary:
      'Building and maintaining backend applications with TypeScript and Node.js for financial products serving hybrid teams across Nigeria.',
    highlights: [
      'Designed scalable RESTful APIs that power multiple applications with sub-100 ms latency and high-volume throughput',
      'Hardened authentication flows and secrets management, cutting security incidents while supporting rapid feature delivery',
      'Automated Docker-based deployments with Git and CI/CD workflows to ensure reliable releases for a 150k+ user base',
    ],
  },
  {
    role: 'Lead Developer',
    company: 'Boundlesspay',
    start: 'Jul 2017',
    end: 'Dec 2020',
    summary:
      'Led backend development for crypto-fintech products, delivering high-performance services to a global customer base.',
    highlights: [
      'Established robust RESTful APIs that adapted dynamically to user input and supported 50k+ concurrent users',
      'Owned the full software development lifecycle—from gathering requirements through deployment and long-term maintenance',
      'Implemented performance monitoring and scaling strategies that kept services fast and available during growth spikes',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Codemwing',
    start: 'Apr 2016',
    end: 'Sep 2016',
    summary:
      'Collaborated with cross-functional teams to modernize web applications and streamline backend integrations.',
    highlights: [
      'Transformed a complex multi-page application into a React-based single-page experience in partnership with product managers',
      'Developed RESTful APIs in PHP and MySQL to support new functionality and improve data consistency',
      'Improved deployment efficiency and system performance through iterative optimization and documentation',
    ],
  },
]

const ProjectMedia = ({ media, title }: { media: string[]; title: string }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const slides = media.map((src) => ({ src }))

  return (
    <div className="card__media">
      <div className="card__media-inline">
        <Lightbox
          plugins={[Inline]}
          slides={slides}
          open
          close={() => {}}
          inline={{
            style: {
              width: '100%',
              height: '100%',
            },
          }}
          index={activeIndex}
          carousel={{ finite: media.length <= 1, imageFit: 'cover' }}
          controller={{ closeOnBackdropClick: false, closeOnPullDown: false }}
          on={{
            view: ({ index }) => setActiveIndex(index),
          }}
          render={{
            buttonClose: () => null,
          }}
        />
      </div>
      <button
        type="button"
        className="media-expand"
        onClick={() => setIsLightboxOpen(true)}
        aria-label={`Expand ${title} screenshots`}
      >
        <span>Tap to expand</span>
      </button>
      <Lightbox
        slides={slides}
        open={isLightboxOpen}
        index={activeIndex}
        close={() => setIsLightboxOpen(false)}
        carousel={{ finite: media.length <= 1, imageFit: 'cover' }}
        controller={{ closeOnBackdropClick: true }}
        on={{
          view: ({ index }) => setActiveIndex(index),
        }}
      />
    </div>
  )
}

const projects: Project[] = [
  {
    title: 'Conglex Platform',
    description:
      'Crypto payments and transfer platform engineered for secure, high-volume blockchain transactions. Designed and implemented the backend with NestJS, PostgreSQL, and Redis to deliver performant, scalable services on AWS ECS.',
    tech: ['NestJS', 'PostgreSQL', 'Redis', 'AWS ECS'],
    media: [conglexImage1, conglexImage2],
  },
  {
    title: 'Rentease',
    description:
      'Simplifies apartment rentals with installment payments. Managed backend services for users, listings, KYC, and payments using NestJS, PostgreSQL, and Redis on AWS for secure, low-latency performance.',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Amazon ECS'],
    media: [rentEaseImage1, rentEaseImage2, rentEaseImage3],
  },
]

const App = () => {
  return (
    <div className="app">
      <header className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="nav__brand" href="#top">
            <span>Phinehas Seth</span>
            <VerifiedBadge />
          </a>
          <div className="nav__links">
            {navigation.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero__content">
          <p className="hero__eyebrow">Backend Engineer · Node.js & TypeScript</p>
          <h1 className="hero__heading">
            Backend engineer who loves building scalable APIs and resilient systems.
          </h1>
          <p className="hero__summary">
            I build responsive, secure, and scalable services that stay reliable under stress. From
            API design and data modeling to deployment automation, I focus on reducing latency,
            improving throughput, and keeping platforms stable at scale.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Discuss an engagement
            </a>
            <a className="button button--ghost" href="mailto:phinehasseth@ymail.com">
              phinehasseth@ymail.com
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section__header">
            <p className="eyebrow">About</p>
            <h2 className="section__title">Shipping resilient APIs for highly regulated teams</h2>
          </div>
          <div className="section__content">
            <p>
              I&apos;m a backend engineer who builds systems that are responsive, secure, and scalable. I
              specialize in Node.js, TypeScript, and API design, crafting solutions that deliver
              reliability even when traffic spikes or business logic is complex.
            </p>
            <p>
              I design RESTful APIs that sustain thousands of requests per second while keeping latency
              under 100 ms. I tune queries, indexing strategies, and caching layers to shave response
              times by up to 40%, and I scale platforms to 100k+ concurrent users with zero downtime.
            </p>
            <p>
              With a BSc in Applied Mathematics, I approach every challenge analytically—breaking down
              trade-offs, modeling performance envelopes, and implementing solutions that maximize
              throughput and stability. I collaborate closely with teams, drive code reviews for
              resiliency, and mentor engineers to raise the bar on service quality.
            </p>
            <p>
              I work comfortably across Node.js, TypeScript, JavaScript (ES6+), Express.js, REST APIs,
              GraphQL, PostgreSQL, MySQL, Redis, MongoDB, Docker, Kubernetes, Git, GitHub Actions, CI/CD,
              AWS (EC2, S3), microservices, event-driven architecture, Kafka, RabbitMQ, WebSockets,
              OAuth2, JWT, Jest, Mocha, and API security practices.
            </p>
            <p>
              I stay curious about distributed systems, cloud-native development, and performance tuning
              so the platforms I build remain modern and resilient. If you need an engineer who reduces
              latency, improves throughput, and scales systems that endure, let&apos;s connect.
            </p>
            <ul className="skill-list" aria-label="Core skills">
              {skills.map((skill) => (
                <li key={skill} className="skill-list__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt" id="experience">
          <div className="section__header">
            <p className="eyebrow">Experience</p>
            <h2 className="section__title">Recent roles & impact</h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.role} className="timeline__item">
                <header className="timeline__header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="timeline__company">{experience.company}</p>
                  </div>
                  <p className="timeline__dates">
                    {experience.start} — {experience.end}
                  </p>
                </header>
                <p className="timeline__summary">{experience.summary}</p>
                <ul className="timeline__highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section__header">
            <p className="eyebrow">Projects</p>
            <h2 className="section__title">Selected work</h2>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                {project.media && project.media.length > 0 && (
                  <ProjectMedia media={project.media} title={project.title} />
                )}
                <div className="card__body">
                  <h3 className="card__title">{project.title}</h3>
                  <p className="card__description">{project.description}</p>
                </div>
                <ul className="tag-list" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tag-list__item">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <a className="card__link" href={project.href} target="_blank" rel="noreferrer">
                    View project
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section section--alt" id="contact">
          <div className="section__header">
            <p className="eyebrow">Contact</p>
            <h2 className="section__title">Let&apos;s build together</h2>
          </div>
          <div className="section__content contact">
            <p>
              I&apos;m open to senior backend engineering roles, consulting engagements, and tactical
              advisory work focused on API modernization. If you&apos;re building something ambitious, let&apos;s
              connect.
            </p>
            <div className="contact__actions">
              <a className="button button--primary" href="mailto:phinehas@sethphiny.dev">
                Send an email
              </a>
              <div className="contact__social" aria-label="Social profiles">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Seth Phiny. Crafted with intention.</p>
      </footer>
    </div>
  )
}

export default App
