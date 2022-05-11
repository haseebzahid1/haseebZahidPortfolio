import React from 'react'
import '../button/Button.css'

const Button = ({text,className,href,newTab}) => {
  return (
    <div className={className}>
      <a href={href} className="main-button" target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  )
}

export default Button
