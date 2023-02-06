import React from 'react'

function Title({title,subtitle}) {
  return (
    <div>
         <div className="section-title">
        <h2>{title} <span>{subtitle}</span></h2>
      </div>
      
    </div>
  )
}

export default Title
