import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ jobType, title, company, experience, location }) => {

  return (
    <div className="job-card">
      <div className="job-type">{jobType}</div>
      <h4 className="job-title">{title}</h4>
      <div className="job-company">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"></path></svg>
        <span>{company}</span>
      </div>
      <div className="job-info">

        <div className="info">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><path fill="currentColor" d="M108 112a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m120-40v128a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h44V48a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v12h44a12 12 0 0 1 12 12M92 60h72V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12ZM36 72v44a188 188 0 0 0 92 24a188 188 0 0 0 92-24V72a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4m184 128v-74.9a196.06 196.06 0 0 1-92 22.9a196 196 0 0 1-92-22.9V200a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4"></path></svg> <span>{experience}</span></p>
        </div>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"></path></svg> <span>{location}</span></p>
      </div>
      <button className="btn-apply">Apply ➤</button>
    </div>
  );
};

export default JobCard;


