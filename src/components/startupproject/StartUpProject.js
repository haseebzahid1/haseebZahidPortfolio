import React from 'react'
import '../../components/startupproject/StartUpProject.css'
import { bigProjects } from '../../portfolio'

const StartUpProject = () => {
  return (
    <div className='startProject'>
      <div className='starProject-container'>
          <div className='container'>
          <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
              <div className='starProject-row'>
                 
                      {bigProjects.projects.map((project)=>{
                          return (
                            <div className="starProject-col-2" >
                            <img alt="Adeel Working" src={project.image}></img>
                          </div> 
                          );
                      })}
                  
              </div>
          </div>
      </div>
    </div>
  )
}

export default StartUpProject
