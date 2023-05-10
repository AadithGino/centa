import React from "react";
import InstructorCard from './InstructorCard'
import '.././styles/Instructors.css'

const Instructors = () => {
  return (
    <>
      <div className="instructors_container">
        <h3>WORLD-CLASS INSTRUCTORS</h3>
        <h1>Courses Taught by Industry Experts</h1>
        <p className="sub_heading">
          CENTA teachers are icons, experts, and industry rock stars excited to
          share their <br /> experience, wisdom, and trusted tools with you.
        </p>
        <div className="instructor_card_container">
          <InstructorCard image={"https://mycenta-dev.netlify.app/images/instructor/instructor-img-1.jpg"}/>
          <InstructorCard image={"https://mycenta-dev.netlify.app/images/instructor/instructor-img-2.jpg"}/>
          <InstructorCard image={"https://mycenta-dev.netlify.app/images/instructor/instructor-img-3.jpg"}/>
          <InstructorCard image={"https://mycenta-dev.netlify.app/images/instructor/instructor-img-4.jpg"}/>
        </div>
       <div className="instrucors_footer">
       <button>See All Instructors</button>
       </div>
      </div>
    </>
  );
};

export default Instructors;
