import React from 'react'
import '../styles/Employers.css'
import '../styles/Header.css'

const Employers = () => {
    return (
        <section className='employee-section'>
            <div className="holder">
                <h2 className="titile1">Employers</h2>
            </div>
            <div className="textholder">
                <p className="text-anim"><strong>WELCOME OFFER - </strong> FREE JOB Postings and Much More.</p>
            </div>

            <div className="btn-log">

                <a href="https://www.jobringer.com/employer/login?signup" className="yellow-btn">Register for FREE</a>
                <a href="https://www.jobringer.com/employer/post-a-job" className="purple-btn">Post A Job</a>

                <a className="salesbtn1" href="contact-us">Sales Enquiry</a>
            </div>
        </section>
    )
}

export default Employers