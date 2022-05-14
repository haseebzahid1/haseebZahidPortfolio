import React from 'react';
import '../experienceCard/ExperienceCard.css';
const ExperienceCard = ({cardInfo}) => {
    
    const GetDescBullets = ({ descBullets }) => {
        return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
      };
   
    return (
        
            <div className='experience-col'>
                <div className="experience-card">
                    <div className="experience-banner">
                        {/* style may background color kesay lekh na hian */}
                        <div className="experience-blurred_div" style={cardInfo.backgroud}>
                        <div className="experience-div-company">
                            <h5 className="experience-text-company">{cardInfo.company}</h5>
                            <img src={cardInfo.companylogo} alt="" className='experience-roundedimg' />
                        </div>
                        </div>
                       

                        
                    </div>
                    <div className="experience-text-details">
                        <h5 className="experience-text-role">{cardInfo.role}</h5>
                        <h5 className="experience-text-date">{cardInfo.date}</h5>
                        <p className="subTitle experience-text-desc">{cardInfo.desc}</p>
                         <ul className='experience-ul'>
                            <GetDescBullets descBullets={cardInfo.descBullets} />
                        </ul>
                    </div>
                </div>
            </div>
       
    )
}

export default ExperienceCard
