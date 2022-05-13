import React from 'react';

import '../../components/softwareSkills/SoftwareSkills.css'
import { skillsSection } from '../../portfolio';

const SofewafeSkill = () => {
  return (
    <div className='software-skills-main-div'>
      <ul className='dev-icons'>
        {skillsSection.softwareSkills.map((skills)=>{
          return (
            <li className="software-skill-inline" name={skills.skillName}>
            <i className={skills.fontAwesomeClassname}></i>
            <p>{skills.skillName}</p>
          </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SofewafeSkill
