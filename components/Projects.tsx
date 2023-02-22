import { useState } from 'react';
import styles from '../styles/Projects.module.css';
import ProjectDetails from './ProjectDetails';
import rjukanbadet_1 from '../public/projects/rjukanbadet_1.png';
import first_portfolio from '../public/projects/first_portfolio.png';
import e_commerce from '../public/projects/e_commerce.png';
import reddit from '../public/projects/reddit_clone.png';

const projects = {
  rjukanbadet: {
    headerText: 'Rjukanbadet',
    description:
      'This is a project I built for a local swimming pool in Rjukan. I built this websight with Bootstrap SASS, it has 10 pages in 2 different languages including a fully functional contact form using PHP',
    skills: [
      'HTML',
      'CSS',
      'SASS',
      'Bootstrap',
      'JavaScript',
      'PHP',
      ],
    images: [rjukanbadet_1],
    links: {
      github: 'https://github.com/Scotty1313/update-badet',
      external: 'https://modern-rjukanbadet.netlify.app/',
      isShowingGithub: true,
      isShowingExternal: true,
    },
  },
  portfolio: {
    headerText: 'My First Portfolio',
    description:
      'I built this website from scratch 1 year ago using vanilla HTML, CSS and JavaScript. I used only CSS to animate the elements on the page. I enjoyed making this portfolio and it serves as a great reminder of how far I have come in the past year.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    images: [first_portfolio],
    links: {
      github: 'https://github.com/Scotty1313/Portfolio',
      external: 'https://topdevs.netlify.app/',
      isShowingGithub: true,
      isShowingExternal: true,
    },
  },
  ecommerce: {
    headerText: 'ECommerce',
    description:
      'I wanted to try my hand at an ecommerce website and decided to build one for a fictional company called Intergalactic Commerce. I used Jamstack with clientside rendering, material-ui, semantic-ui and utilised stripe for payment management.',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Material-UI', 'Semantic-UI', 'Stripe', 'React-Hooks', 'React-Router', 'Commerce.js'],
    images: [e_commerce], 
    links: {
      github: 'https://github.com/Scotty1313/e_commerce_website',
      external: 'https://intergalacticcommerce.netlify.app/',
      isShowingGithub: true,
      isShowingExternal: true,
    },
  },
  reddit: {
    headerText: 'Reddit Clone',
    description:
      'Building this reddit clone was a challenge I set for myself to learn more about data management and authentication. I decided to build it using Next.js, Typescript and TailwindCSS for the front. I implemented Stepzen as a GraphQL API and Supabase for the database, I used Apollo-client to manage the data and NextAuth to handle authentication.',
    skills: ['React', 'Typescript', 'TailwindCSS', 'Next.js', 'Apollo-Client', 'GraphQL', 'Stepzen', 'Supabase', 'NextAuth', 'PostgreSQL'],
    images: [reddit],
    links: {
      github: 'https://github.com/Scotty1313/Reddit_clone',
      external: '',
      isShowingGithub: true,
      isShowingExternal: false,
    },
  },
};
interface ProjectsProps {
  isMobile: boolean;
  animateProjects: boolean;
}

function Projects({ isMobile, animateProjects }: ProjectsProps): JSX.Element {
  const [selected, setSelected] = useState<string>('rjukanbadet');

  const getStyle = (id: string) => {
    if (selected === id) return styles.selected;
    else return '';
  };

  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <>
      <h2
        className={styles.header}
        style={{
          opacity: animateProjects ? 1 : 0,
          transform: animateProjects ? 'translateY(0px)' : 'translateY(20px)',
        }}
        id="projects"
      >
        Projects
      </h2>
      <section
        className={styles.wrapper}
        style={{
          opacity: animateProjects ? 1 : 0,
          transform: animateProjects ? 'translateY(0px)' : 'translateY(20px)',
        }}
      >
        <div className={styles.containerMain}>
          <div className={styles.containerProject}>
          <button
              className={`${styles.projectWrapper} ${getStyle('reddit')}`}
              onClick={() => handleClick('reddit')}
            >
              <div className={`${styles.border} ${getStyle('reddit')}`} />
              <h3 className={styles.projectTitle}>Reddit Clone</h3>
            </button>
            <button
              className={`${styles.projectWrapper} ${getStyle('ecommerce')}`}
              onClick={() => handleClick('ecommerce')}
            >
              <div className={`${styles.border} ${getStyle('ecommerce')}`} />
              <h3 className={styles.projectTitle}>ECommerce</h3>
            </button>
            <button
              className={`${styles.projectWrapper} ${getStyle('rjukanbadet')}`}
              onClick={() => handleClick('rjukanbadet')}
            >
              <div className={`${styles.border} ${getStyle('rjukanbadet')}`} />
              <h3 className={styles.projectTitle}>Rjukanbadet</h3>
            </button>
            <button
              className={`${styles.projectWrapper} ${getStyle('portfolio')}`}
              onClick={() => handleClick('portfolio')}
            >
              <div className={`${styles.border} ${getStyle('portfolio')}`} />
              <h3 className={styles.projectTitle}>Portfolio 1.0</h3>
            </button>
            
        </div>
          <div className={styles.containerInfo}>
            {selected === 'rjukanbadet' && (
              <ProjectDetails
                selected={selected}
                headerText={projects.rjukanbadet.headerText}
                description={projects.rjukanbadet.description}
                skills={projects.rjukanbadet.skills}
                imageOne={projects.rjukanbadet.images[0]}
                links={projects.rjukanbadet.links}
                isMobile={isMobile}
              />
            )}
            {selected === 'portfolio' && (
              <ProjectDetails
                selected={selected}
                headerText={projects.portfolio.headerText}
                description={projects.portfolio.description}
                skills={projects.portfolio.skills}
                imageOne={projects.portfolio.images[0]}
                links={projects.portfolio.links}
                isMobile={isMobile}
              />
            )}
            {selected === 'ecommerce' && (
              <ProjectDetails
                selected={selected}
                headerText={projects.ecommerce.headerText}
                description={projects.ecommerce.description}
                skills={projects.ecommerce.skills}
                imageOne={projects.ecommerce.images[0]}
                links={projects.ecommerce.links}
                isMobile={isMobile}
              />
            )}
            {selected === 'reddit' && (
              <ProjectDetails
                selected={selected}
                headerText={projects.reddit.headerText}
                description={projects.reddit.description}
                skills={projects.reddit.skills}
                imageOne={projects.reddit.images[0]}
                links={projects.reddit.links}
                isMobile={isMobile}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
