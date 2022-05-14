import React from 'react'
import '../../components/tacks/Talks.css'
import { talkSection } from '../../portfolio'
import TalksCard from '../talksCard/TalksCard'
const Talks = () => {
  return (
    <div className='container'>
        <div className='talk-content'>
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p className="subTitle talk-header-subtitle">{talkSection.subtitle}</p>
     </div>
        
                {talkSection.talks.map((talk)=>{
                    return (
                        <TalksCard 
                        talkDetails={{
                            title:talk.title,
                            subtitle:talk.subtitle,
                            slides_url: talk.slides_url,
                            event_url: talk.event_url,
                        }}
                        />
                    );
                })}
         
    </div>
  )
}

export default Talks
