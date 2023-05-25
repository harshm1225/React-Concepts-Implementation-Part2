import { useEffect } from "react";
import "./Card.css";
const Card = (props) => {
  function btnClickHandler(event) {
    props.onClick(event.target);
  }
  const { job } = props;
  const isNew = job.postedAt.includes("1d ago");
  return (
    <>
      <div className="card-container">
        <div className="job-card">
          <div className="job-card__company-image">
            <img src="" alt="" />
          </div>
          <div className="job-card__description">
            <div className="job-card__job-description">
              <div>
                <span>{job.company}</span>
                {isNew ? <span>NEW!</span> : ""}
                {job.featured ? <span>FEATURED</span> : ""}
              </div>
              <p>{job.position}</p>
              <div>
                <span>{job.postedAt}</span>
                <span>{job.contract}</span>
                <span>{job.location}</span>
              </div>
            </div>
            <div className="job-card__skills-categories">
              {job.languages.map((language, index) => {
                return (
                  <button onClick={btnClickHandler} key={index}>
                    {language}
                  </button>
                );
              })}
              <button onClick={btnClickHandler}>{job.role}</button>
              <button onClick={btnClickHandler}>{job.level}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
