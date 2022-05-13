import React from 'react'
import '../workExpercience/WorkExperience.css'
import ExperienceCard from '../experienceCard/ExperienceCard'
import {workExperiences} from "../../portfolio"

const WorkExperience = () => {
  if(workExperiences.viewExperiences){
    return (
      <div className='container'>
       <h1 className="experience-heading">Experiences</h1>
        <div className='workExperience-container'>
          {workExperiences.experience.map((card)=>{
            return (
              <ExperienceCard 
                 cardInfo={{
                   company:card.company,
                   companylogo: card.companylogo,
                   desc: card.desc,
                   date: card.date,
                   role: card.role,
                   descBullets: card.descBullets
                 }}
              />
            )
          })}
        
        </div>
      </div>
    )
  }
 return null;
}

export default WorkExperience
