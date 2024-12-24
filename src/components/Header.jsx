import React from 'react'
import logo from '../assets/logonew.svg'
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Logo */}
    
     
      <div className="header-left">
        <img
          src={logo}
          alt="Jobringer Logo"
          className="logo"
        />
      </div>

      <div className="header-center">
        <span className="tagline">BRINGING YOU <span className='blue_text'> THE PERFECT JOB</span> </span>
      </div>
      <div className="header-center2">
        <p className='text-anim'>1100+ <br />Active user</p>
      </div>
      {/* Right Section: Navigation Links and Buttons */}
      <div className="header-right">
        <nav className="nav-links">
          <a href="#jobs">Jobs</a>
          <a href="#employers">Active Employers</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn-login jobseeker-login">Jobseeker Login</button>
          <button className="btn-login employer-login">Employer Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header