import React from 'react';
import Header from './components/Header';
import Greeting from './components/greeting/Greeting';
import WorkExperience from './components/workExpercience/WorkExperience';
import Achievement from './components/achivevement/Achievement';

const Mian = () => {
  return (
    <>
      <Header />
      <Greeting />
      <WorkExperience />
      <Achievement />
    </>
  )
}

export default Mian
