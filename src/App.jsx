import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
// import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import CardThree from './components/CardThree'
// import Projects from './components/web_projects/Projects'
// import Hamzah from './components/web_projects/hamzah.jpg'
// import IMG1 from './assets/app2.png';
// import IMG2 from './assets/app1.png';
// import IMG3 from './assets/app5.png';
// import IMG4 from './assets/app4.png';
// import IMG5 from './assets/app6.png';
// import Learn from './assets/learn.png'

// import IMG6 from './assets/app7.png';
// import IMG7 from './assets/app8.png';
// import IMG9 from './assets/Screenshot 2024-12-26 122810.png';
// import IMG10 from './assets/app10.png';
// import IMG11 from './assets/Screenshot 2023-12-23 141300.png'
// import IMG12 from './assets/Screenshot 2023-12-23 141711.png'
// import IMG13 from './assets/Screenshot 2023-12-23 142957.png'
// import IMG14 from './assets/Screenshot 2024-12-26 121113.png'
const App = () => {
  // const items = [
  //   {
  //     image: Learn,
  //     link: 'https://thelearnbook.com',
  //     title: 'The Learn Book Gate',
  //     description: 'This is pretty cool, right?'
  //   },
  //   {
  //     image: 'https://picsum.photos/400/400?grayscale',
  //     link: 'https://google.com/',
  //     title: 'Item 2',
  //     description: 'This is pretty cool, right?'
  //   },
  //   {
  //     image: 'https://picsum.photos/500/500?grayscale',
  //     link: 'https://google.com/',
  //     title: 'Item 3',
  //     description: 'This is pretty cool, right?'
  //   },
  //   {
  //     image: 'https://picsum.photos/600/600?grayscale',
  //     link: 'https://google.com/',
  //     title: 'Item 4',
  //     description: 'This is pretty cool, right?'
  //   }
  // ];
  return (
    <>
      <Header />
      <CardThree />
      <Topbar />
      <Intro />
      <Experience />
      {/* <div style={{ height: '600px', position: 'relative' }}>
        <Projects items={items} />
      </div>      <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
