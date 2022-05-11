import React from 'react';
import '../experienceCard/ExperienceCard.css';
const ExperienceCard = () => {
    return (
        
            <div className='experience-col'>
                <div className="experience-card">
                    <div className="experience-banner">
                        <div className="experience-blurred_div"></div>
                        <div className="experience-div-company">
                            <h5 className="experience-text-company">Software</h5>
                        </div>

                        
                    </div>
                    <div className="experience-text-details">
                        <h5 className="experience-text-role">Software Engineer</h5>
                        <h5 className="experience-text-date">June 2019 – Present</h5>
                        <p className="subTitle experience-text-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        
                    </div>
                </div>
            </div>
       
    )
}

export default ExperienceCard
