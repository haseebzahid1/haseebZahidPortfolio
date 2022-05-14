import React from 'react';
import Header from './components/Header';
import Greeting from './components/greeting/Greeting';
import WorkExperience from './components/workExpercience/WorkExperience';
import Achievement from './components/achivevement/Achievement';
import Skills from './components/skills/Skills';
import SkillsProgress from './components/skillProgress/SkillsProgress';
import Blogs from './components/blogs/Blogs';

const Mian = () => {
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
      <SkillsProgress />
      <WorkExperience />
      <Achievement />
      <Blogs />
    </>
  )
}

export default Mian
