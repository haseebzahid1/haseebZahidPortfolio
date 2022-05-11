import React from 'react'
import '../workExpercience/WorkExperience.css'
import ExperienceCard from '../experienceCard/ExperienceCard'
import {workExperiences} from "../../portfolio"

const WorkExperience = () => {
  if(workExperiences.viewExperiences){
    
  }
  return (
    <div className='container'>
      <div className='workExperience-container'>
      <ExperienceCard />
      
      </div>
    </div>
  )
}

export default WorkExperience
