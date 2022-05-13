import React from 'react'
import '../../components/achievementCard/AchievementCard.css'
const AchievementCard = () => {
  return (
    <div className='container'>
      <div className='achievementCard-container'>
          <div className='achievementCard-col'>
              <div className='achievementCard-body'>
                  <div className='achievementCard-img'>
                      {/* <img src="" alt="" /> */}
                  </div>
                  <div className='achievementCard-content'>
                      <h1 className='achievementCard-h1'>V.U Programming Campetation</h1>
                      <p className='achievementCard-p'>A passionate web developer who love to build stunning, responsive and User friendly website using modern web frameworks and libraries.</p>
                      <div className='achievementCard-textFlex'>
                          <span className='achievementCard-span'>Certification</span>
                          <span className='achievementCard-span'>Award Letter</span>
                      </div>
                      <span className='achievementCard-footerText'>Google Code-iin BLog</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AchievementCard
