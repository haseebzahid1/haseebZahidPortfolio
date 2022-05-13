import React from 'react';
import Header from './components/Header';
import Greeting from './components/greeting/Greeting';
import WorkExperience from './components/workExpercience/WorkExperience';
import AchievementCard from './components/achievementCard/AchievementCard';

const Mian = () => {
  return (
    <>
      <Header />
      <Greeting />
      <WorkExperience />
      <AchievementCard />
    </>
  )
}

export default Mian
