import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ jobType, title, company, employmentType, experience, location }) => {
  return (
    <div className="job-card">
      <div className="job-type">{jobType}</div>
      <h4 className="job-title">{title}</h4>
      <p className="job-company">{company}</p>
      <div className="job-info">
        <p>{employmentType}</p>
        <p>{experience}</p>
        <p>{location}</p>
      </div>
      <button className="btn-apply">Apply ➤</button>
    </div>
  );
};

export default JobCard;


