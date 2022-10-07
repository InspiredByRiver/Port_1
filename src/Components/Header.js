import React from 'react'
import Typed from 'react-typing-effect';

const Header = () => {
  return (
    <div className='header-wraper'>
        <div className='main-info'>
            <h1>Plants by the River</h1>
            <h3>Evita Redzepagic</h3>
            <Typed
                className='typed-text'
                text={['GreenThumb Certified,', 'Step by Step Guides,', 'Loving Community,']}
                speed={40}
                eraseSpeed={60}
                eraseDelay={1000}
                typingDelay={500}
             />
             <a href='#' className='btn-main-offer'>Learn More</a>
        </div>
    </div>
  )
}

export default Header
 