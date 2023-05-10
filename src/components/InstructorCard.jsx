import React from "react";
import ".././styles/InstructorCard.css";

const InstructorCard = ({ image }) => {
  return (
    <>
      <div className="instructor_card1_container">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h2>Mary Roberts</h2>
          <p>Professiona Web Developer</p>
          <div className="footer">
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>4.5</p>
            <p>9,691 Students</p>
            <p>6 Course</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
