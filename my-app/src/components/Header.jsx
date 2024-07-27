import React from 'react'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div id = 'main'>
      <Navbar/>
      <div className='name'>
        <h1>Reviving Ancient <span>Indian Medicine</span> Traditions. </h1>
       <p className='details'>Discover personalized Ayurvedic guidance tailored to your health. Shop for top-quality Ayurvedic products worry-free. We securely store your medical history to ensure your safety. Experience holistic well-being with us!</p>
      {/* <a href="#" className='cv-btn'>Book Trial</a> */}
      </div>
    </div>
  )
}

export default Header;