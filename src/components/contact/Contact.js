import React from 'react'
import '../../components/contact/Contact.css'
import { contactInfo } from '../../portfolio'
import SocialMedia from '../socialMedia/SocialMedia'

const Contact = () => {
  return (
    <div className='main contact-margin-top'>
      <div className='container'>
          <div className='contact-container'>
              <div className='contact-left'>

             <div className='contact-header'>
             <h1 className="heading contact-title">{contactInfo.title}</h1>
                <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
             </div>
             <div className='contact-content'>
                 <a className='contact-detail' href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                 <a className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}
                </a>
               
             </div>
             <SocialMedia/>
              </div>
              <div className='contact-right'>
                  <img src="img/adeel.jpg" alt="haseeb working" className='contact-right-img' />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
