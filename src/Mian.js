import React from 'react';
import Header from './components/Header';
import Greeting from './components/greeting/Greeting';
import WorkExperience from './components/workExpercience/WorkExperience';
import Achievement from './components/achivevement/Achievement';
import Skills from './components/skills/Skills';
import SkillsProgress from './components/skillProgress/SkillsProgress';
import Blogs from './components/blogs/Blogs';
import Talks from './components/tacks/Talks';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import StartUpProject from './components/startupproject/StartUpProject';

const Mian = () => {
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
      <SkillsProgress />
      <WorkExperience />
      <StartUpProject />
      <Achievement />
      <Blogs />
      <Talks />
      <Contact />
      <Footer />
    </>
  )
}

export default Mian
