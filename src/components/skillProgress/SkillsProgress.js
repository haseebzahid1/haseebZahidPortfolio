import React from 'react'
import { techStack } from '../../portfolio'
import '../../components/skillProgress/SkillsProgress.css'

const SkillsProgress = () => {
    return (
        <div className='container'>
            <div className='progress-container'>
                <div className='progress-content'>
                <h1 className="progress-heading">Proficiency</h1>
                    {techStack.experience.map((exp) => {

                        const progressStyle = {
                            width: exp.progressPercentage
                        };

                        return (
                            <div className="skill">
                                <p className='skills-p'>{exp.Stack}</p>
                                <div className="meter">
                                    <span style={progressStyle}></span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='progress-img'>
                    <img src="img/skill.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SkillsProgress
