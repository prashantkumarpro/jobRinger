import React from 'react'
import '../styles/Footer.css'
import MobileBottomHeader from './MobileBottomHeader';
import Social from './Social';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-category">
          <h3>JOBS IN INDIA</h3>
          <p>
            #Mumbai #Delhi #Ajmer #Pune #Hyderabad #Agra #Chennai #Kolkata
            #Indore #Gurugram #Jaipur #Ahmedabad
          </p>
        </div>
        <div className="jobs-category">
          <h3>INTERNATIONAL JOBS</h3>
          <p>
            #Africa #USA #UK #Australia #Canada #Singapore #Dubai #Saudi Arabia
            #New Zealand
          </p>
        </div>
      </div>

      {/* Job Stats */}
      <div className="stats">
        <div>
          <h4>Jobs Posted</h4>
          <p className="number">32275</p>
        </div>
        <div>
          <h4>Jobs Filled</h4>
          <p className="number">15153</p>
        </div>
        <div>
          <h4>Employers</h4>
          <p className="number">20413</p>
        </div>
        <div>
          <h4>Active Users</h4>
          <p className="number">1297096</p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="disclaimer">

        <p> <strong>Disclaimer:</strong> All Trademarks and Logos are the property
          of their respective owners, depicted here purely for representation
          purpose. Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Job Applicants are advised to
          evaluate independently. Jobringer.com shall not have any responsibility
          in this regard. All Jobseeker services are strictly designed & meant
          only for job search assistance and to maximize the chances for the
          jobseekers to get their dream job. All Job Seeker Credentials and
          Employment Opportunities are subject to individual merit & evaluation.
          We do not guarantee any job to any jobseeker.</p>

        <div className="recognized">
          <span>Recognized By</span>
          <strong>#startupindia</strong>
        </div>

        {/* Follow Us and Recognized Section */}
        <Social/>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <p>
          Terms and conditions | Privacy Policy | Refund / Cancellation Policy |
          About Us | Contact Us | FAQ | Blogs
        </p>
        <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
      </div>
      <MobileBottomHeader />

    </footer>
  );
};

export default Footer;
