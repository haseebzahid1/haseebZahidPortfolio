import React from 'react'
import '../../components/achievementCard/AchievementCard.css'
const AchievementCard = ({cardInfo}) => {
  return (
   
          <div className='achievementCard-col'>
              <div className='achievementCard-body'>
                  <div className='achievementCard-img'>
                      <img src={cardInfo.image} alt="" />
                  </div>
                  <div className='achievementCard-content'>
                      <h1 className='achievementCard-title'>{cardInfo.title}</h1>
                      <p className='achievementCard-subtitle'>{cardInfo.description}</p>
                      <div className='achievementCard-footer'>
                          <span className='achievementCard-span'>Certification</span>
                          <span className='achievementCard-span'>Award Letter</span>
                          <span className='achievementCard-span'>Google Code-iin BLog</span>
                      </div>
                      
                  </div>
              </div>
          </div>
      
  )
}

export default AchievementCard
