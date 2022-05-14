import React from 'react'
import '../../components/talksCard/TalksCard.css'

const TalksCard = ({talkDetails}) => {
  return (
    <div className='talk-card'>
     <div className='talk-cardimg'>
     <h1 class="talk-card-title">{talkDetails.title}</h1>
          
     </div>
     <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

     <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" class="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" class="talk-button">
              Event
            </a>
          </div>
    </div>
  )
}

export default TalksCard
