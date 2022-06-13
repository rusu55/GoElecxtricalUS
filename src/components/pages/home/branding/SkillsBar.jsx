import React from 'react'

const SkillsBar = () => {
  return (
    <div className='skill-bar'>
        <div className='bar'>
            <div className='info'>
                <span>Reliable</span>
            </div>
            <div className="progress-line html">
                <span></span>
            </div>
        </div>
        <div className='bar'>
            <div className='info'>
                <span>Customer Satisfaction</span>
            </div>
            <div className="progress-line css">
                <span></span>
            </div>
        </div>
        <div className='bar'>
            <div className='info'>
                <span>Affordable</span>
            </div>
            <div className="progress-line react">
                <span></span>
            </div>
        </div>
        <div className='bar'>
            <div className='info'>
                <span>Quality</span>
            </div>
            <div className="progress-line python">
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default SkillsBar