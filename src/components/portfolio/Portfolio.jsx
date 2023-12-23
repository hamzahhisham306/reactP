import React from 'react';
import IMG1 from '../../assets/app2.png';
import IMG2 from '../../assets/app1.png';
import IMG3 from '../../assets/app5.png';
import IMG4 from '../../assets/app4.png';
import IMG5 from '../../assets/app6.png';
import IMG6 from '../../assets/app7.png';
import IMG7 from '../../assets/app8.png';
import IMG9 from '../../assets/app9.png';
import IMG10 from '../../assets/app10.png';
import IMG11 from '../../assets/Screenshot 2023-12-23 141300.png'
import IMG12 from '../../assets/Screenshot 2023-12-23 141711.png'
import IMG13 from '../../assets/Screenshot 2023-12-23 142957.png'
import './portfolio.css';

const Portfolio = () => {
const soloProjects = [
    {
      id: 9,
      title: 'Arab Georgia',
      img: IMG11,
      description:
        ' Georgia is a community project that helps Arabs living in or moving to Georgia. The project provides a forum for Arab Georgians to connect with each other and share resources, experiences, and advice.The project also provides employment opportunities for Arabs residing in Georgia....',
      technologies: 'React | Redux | CSS | PHP | Laravel | SQL',
      link: 'https://arab-georgia.com/en',
      github: 'https://arab-georgia.com/en',
    },

    {
      id: 9,
      title: 'All Arab USA',
      img: IMG12,
      description:
        'Arab USA represents a nationwide initiative focused on uniting Arab communities across all 50 states. Catering to Arab residents anywhere in the U.S., and those considering relocating, this project is committed to fostering connections and reinforcing bonds. Leveraging social media platforms, organizing events......',
      technologies: 'React | Redux | CSS | PHP | Laravel | SQL',
      link: 'https://allarabusa.com/en',
      github: 'https://allarabusa.com/en',
    },
    {
      id: 9,
      title: 'Georgia Muslim',
      img: IMG13,
      description:
      ' Georgia is a community project that helps Arabs living in or moving to Georgia. The project provides a forum for Arab Georgians to connect with each other and share resources, experiences, and advice.The project also provides employment opportunities for Arabs residing in Georgia....',
      technologies: 'React | Redux | CSS | PHP | Laravel | SQL',
      link: 'https://deluxe-daifuku-08e26e.netlify.app/',
      github: 'https://deluxe-daifuku-08e26e.netlify.app/',
    },
    {
      id: 8,
      title: 'Design Studio',
      img: '',
      description:
        'We have built a website for you that provides the ability to choose your own styling and have it printed on our great quality T-shirt.',
      technologies: 'React | CSS | Node.js | Express.js | MongoDB',
      link: 'https://github.com/orgs/Black-Ops-Geekss/repositories',
      github: 'https://github.com/orgs/Black-Ops-Geekss/repositories',
    },
    {
      id: 9,
      title: 'JOurney',
      img: IMG9,
      description:
        'we have built a website for schools that provides Organizing fun, useful and safe school trips takes a lot of time and effort and requires special study for the trip ',
      technologies: 'React | Redux | CSS | Node.js | Express.js | PostgreSQL',
      link: 'https://github.com/orgs/School-trip-app/repositories',
      github: 'https://github.com/orgs/School-trip-app/repositories',
    },
    {
      id: 10,
      title: 'Typing Speed',
      img: IMG10,
      description:
        'Typing Speed Test Game',
      technologies: 'html | CSS | javascript',
      link: 'https://hamzahhisham306.github.io/Typeing/',
      github: 'https://github.com/hamzahhisham306/Typeing',
    },
    {
      id: 1,
      title: 'GPT-3',
      img: IMG1,
      description:
        'GPT-3 :project-modern-gpt3 ',
      technologies: 'React | CSS ',
      link: 'https://timely-cajeta-a18b15.netlify.app/',
      github: 'https://github.com/hamzahhisham306/GPT-3-ReactJS',
    },
    {
      id: 2,
      title: 'restairant-design',
      img: IMG2,
      description:
        'restairant-design  app that provides information about available products and their details',
      technologies: 'React | CSS',
      link: 'https://sparkling-beignet-214171.netlify.app/',
      github: 'https://github.com/hamzahhisham306/restairant-design',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG4,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'html | CSS | javascript',
      link: 'https://hamzahhisham306.github.io/todo/',
      github: 'https://github.com/hamzahhisham306/todo',
    },
    {
      id: 4,
      title: 'templet3',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'HTML | CSS',
      link: 'https://hamzahhisham306.github.io/templet3/',
      github: 'https://github.com/hamzahhisham306/templet3',
    },
    {
      id: 5,
      title: 'Kasper',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'HTML | CSS',
      link: 'https://hamzahhisham306.github.io/kasper/',
      github: 'https://github.com/hamzahhisham306/kasper',
    },
    {
      id: 6,
      title: 'Python-game',
      img: IMG6,
      description:
        'python game ',
      technologies: ' HTML  | CSS | JavaScript',
      link: 'https://hamzahhisham306.github.io/python-game/',
      github: 'https://github.com/hamzahhisham306/python-game',
    },
    {
      id: 7,
      title: 'Burger website',
      img: IMG7,
      description:
        'Burger website',
      technologies: ' HTML  | CSS | JavaScript',
      link: 'http://localhost:3000',
      github: 'http://localhost:3000',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
