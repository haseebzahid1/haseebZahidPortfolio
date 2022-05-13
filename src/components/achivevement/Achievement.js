import React from 'react'
import { achievementSection } from '../../portfolio'
import '../achivevement/Achievement.css'
import AchievementCard from '../achievementCard/AchievementCard'

const Achievement = () => {
  return (
    <div className='container'>
         <div className="achievement-header">
          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
          <p className="subTitle achievement-subtitle">{achievementSection.subtitle}</p>
        </div>
      <div className='achievementCard-container'>
     
          {achievementSection.achivementsCards.map((card)=>{
              return <AchievementCard 
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
              }}
              />
          })}

      </div>
    </div>
  )
}

export default Achievement
