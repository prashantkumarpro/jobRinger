import React, { useState } from 'react'
import '../styles/MobileBottomHeader.css'
import Social from './Social';


const MobileBottomHeader = () => {

    const [isMenu, setIsMenu] = useState(false);


    const handleMenu = () => {
        if (isMenu) {
            setIsMenu(false)
            const sideNav = document.querySelector('.sideNav');
            sideNav.classList.remove('open')
        } else {
            setIsMenu(true)
            const sideNav = document.querySelector('.sideNav');
            sideNav.classList.add('open')
        }
    }
    return (
        <>
            <div className='mobile_bottom_header'>
                <div className="menu heder_link"
                    onClick={handleMenu}
                >
                    <i className="fa-solid fa-bars menu"></i>
                </div>
                <div className='users heder_link'>
                    <div> <i className="fa-solid fa-user-plus"></i></div>
                    <p>Login</p>
                </div>
                <div className="job_btn heder_link">
                    <img src="https://jobringer.com/images/Jobringer_icon.png" width="23" height="23" alt="jobringer jobs" />Home
                </div>
                <div className="jobs heder_link">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 50 50"
                    >
                        <g
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <path
                                stroke="#344054"
                                d="M31.25 22.917v4.166m2.083-12.5H16.667v-6.25A2.083 2.083 0 0 1 18.75 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083zm2.084 8.334H14.583z"
                            />
                            <path
                                stroke="#306CFE"
                                d="M43.75 41.667v-25a2.084 2.084 0 0 0-2.083-2.084H8.333c-1.15 0-2.083.933-2.083 2.084v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083"
                            />
                        </g>
                    </svg>
                    <span>Jobs</span>
                </div>
            </div>

            <ul className="sideNav">
                <li className="list-hover"><a href="https://www.jobringer.com/jobs">Jobs</a></li>
                <li className="list-hover"><a href="https://www.jobringer.com/employers-list.php">Active Employers</a></li>
                <li className="list-hover"><a href="https://www.jobringer.com/blogs">Job Blogs</a></li>
                <li className="dropdown menulihide7 list-hover">
                    <a className="dropdown-toggle headerprofileanchorbox list-hover" data-toggle="dropdown" href="#">Pricing</a>
                    {/* <ul className="dropdown-menu">
                        <li className="list-hover"><a href="https://www.jobringer.com/employer/pricing-plan" target="_blank">Employer Pricing Plan</a></li>
                        <li className="list-hover"><a href="https://www.jobringer.com/jobseeker/pricing-plan" target="_blank">Jobseeker Pricing Plan</a></li>
                    </ul> */}
                </li>
                <li className="login-btn menulihide11 wol"><a href="https://www.jobringer.com/jobseeker/login">Jobseeker Login</a></li>
                <li className="employer-login-btn menulihide12 wol"><a href="https://www.jobringer.com/employer/login">Employer Login</a></li>
                <div className="bottomSocial">
                    <Social />
                </div>
            </ul>


        </>
    )
}

export default MobileBottomHeader