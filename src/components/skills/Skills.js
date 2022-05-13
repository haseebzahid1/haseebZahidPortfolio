import React from 'react'
import '../../components/skills/Skills.css'
import { skillsSection } from '../../portfolio'
import SofewafeSkill from '../softwareSkills/SofewareSkills'

const Skills = () => {
  return (
    <div className='container'>
            <div className='skills-container'>
                <div className='skills-img-div'>
                    <img src="img/developerActivity.svg" alt="" className='skills-left-img' />
                </div>

                <div className='skills-content-div'>
                <h1 className="skills-heading">What i do </h1>
                <p className="subTitle skills-text-subtitle">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p> 
                <SofewafeSkill />
                <div className=''>
                    {skillsSection.skills.map((skills)=>{
                        return <p className='subTitle skills-text'>
                            {skills}
                        </p>
                    })}
                </div>
                </div>
            </div>
        </div>
  )
}

export default Skills
