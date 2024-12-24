import React from "react";
import "../styles/QuickJobSearch.css";

const QuickJobSearch = () => {
  return (
    <section className="quick-job-search">
      <div className="search-header">
        <h2>BRINGING YOU THE PERFECT JOB!</h2>
        <p>11,000+ JOBS to Apply</p>
      </div>
      <div className="boxes">
        <div className="left">
          <div className="search-bar-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search Jobs Now"
            />
            <button className="btn btn-search">Search</button>
          </div>
          <div className="left_part2">
            <button className="btn btn-view-jobs">View Jobs</button>
            <button className="btn btn-register">Register For FREE</button>
          </div>
        </div>
        <div className="job-categories">
          <h2>Quick Job Search <span role="img" aria-label="search">🔍</span></h2>
          <div className="text">
            <span> #Fresher </span> <span> #Work From Home </span> <span> #WFH</span>  <span> #IT  </span><span> #HR </span>  <span> #Back Office </span>
            <span> #BPO Jobs </span> <span> #ITES</span>  <span> #Finance</span>  <span> #Accounts</span>  <span> #Medical </span>  <span> #Pharma </span>
            <span> #Manager</span>  <span> #Developer</span>  <span> #Marketing  </span><span> #Engineering </span>  <span> #Non Government Jobs </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickJobSearch;
