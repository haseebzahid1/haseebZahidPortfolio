import React from 'react'
import '../workExpercience/WorkExperience.css'
import ExperienceCard from '../experienceCard/ExperienceCard'

const WorkExperience = () => {
  return (
    <div className='container'>
      <div className='workExperience-container'>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      </div>
    </div>
  )
}

export default WorkExperience
