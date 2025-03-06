import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import CardThree from './components/CardThree'
import Projects from './components/web_projects/Projects'
import IMG1 from './assets/app2.png';
import IMG2 from './assets/app1.png';
import IMG3 from './assets/app5.png';
import IMG4 from './assets/app4.png';
import IMG5 from './assets/app6.png';
import Learn from './assets/learn.png'


import IMG9 from './assets/Screenshot 2024-12-26 122810.png';
import IMG11 from './assets/Screenshot 2023-12-23 141300.png'
import IMG12 from './assets/Screenshot 2023-12-23 141711.png'
import Ecommerce from './assets/ecommer.png';

const App = () => {
  const items = [
    {
      image: IMG11,
      link: 'https://arab-georgia.com/en',
      title: 'Arab Georgia',
      description: 'Georgia is a community project that helps Arabs living in or moving to Georgia. The project provides a forum for Arab Georgians to connect with each other and share resources, experiences, and advice.The project also provides employment opportunities for Arabs residing in Georgia....'
    },
    {
      image: IMG12,
      link: 'https://allarabusa.com/en',
      title: 'All Arab USA',
      description: 'Arab USA represents a nationwide initiative focused on uniting Arab communities across all 50 states. Catering to Arab residents anywhere in the U.S., and those considering relocating, this project is committed to fostering connections and reinforcing bonds. Leveraging social media platforms, organizing events......'
    },
    {
      image: Ecommerce,
      link: 'https://illustrious-sopapillas-c96ed0.netlify.app/',
      title: 'E-commerce',
      description: 'Ecommerce is the buying/selling of goods or services on the Internet'
    },
    {
      image: IMG9,
      link: 'https://github.com/orgs/School-trip-app/repositories',
      title: 'JOurney',
      description: 'we have built a website for schools that provides Organizing fun, useful and safe school trips takes a lot of time and effort and requires special study for the trip '
    },
    {
      image: IMG1,
      link: 'https://timely-cajeta-a18b15.netlify.app',
      title: 'GPT-3',
      description: 'PT-3 :project-modern-gpt3 '
    },
   
    {
      image: IMG2,
      link: 'https://sparkling-beignet-214171.netlify.app/',
      title: 'restairant-design',
      description: 'restairant-design  app that provides information about available products and their details '
    },
    {
      image: IMG4,
      link: 'https://hamzahhisham306.github.io/todo/',
      title: 'To-Do-App',
      description: 'User friendly app to plan your day and manage tasks '
    },
    {
      image: IMG3,
      link: 'https://hamzahhisham306.github.io/templet3/',
      title: 'templet3',
      description: 'Fully responsive interactive website built based on Figma design'
    },
    {
      image: Learn,
      link: 'https://thelearnbook.com',
      title: 'The Learn Book Gate',
      description: 'The Scientific Book Portal constitutes a platform for databases that includes various sources of knowledge under its umbrella, as it includes thousands of works of scientific books, theses, Arab journals, and international conferences'
    },
    {
      image: IMG5,
      link: 'https://hamzahhisham306.github.io/kasper/',
      title: 'Kasper',
      description: 'Fully responsive interactive website built based on Adobe XD design '
    },
  
  ];
  return (
    <>
      <Header />
      <CardThree />
      <Topbar />
      <Intro />
      <Experience />
      <div id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <Projects items={items} />
      </div>    
        <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
