import React from "react";
import ".././styles/BecomeInstructor.css";

const BecomeInstructor = () => {
  return (
    <div className="becomeInstructor_container">
      <div className="top">
        <div className="left">
          <div className="profiles">
            <img
              className="profile_icon_1"
              src="https://mycenta-dev.netlify.app/images/avatar/avatar-1.jpg"
              alt=""
            />
            <img
              className="profile_icon_2"
              src="https://mycenta-dev.netlify.app/images/avatar/avatar-2.jpg"
              alt=""
            />
            <img
              className="profile_icon_3"
              src="https://mycenta-dev.netlify.app/images/avatar/avatar-3.jpg"
              alt=""
            />
            <img
              className="profile_icon_4"
              src="https://mycenta-dev.netlify.app/images/avatar/avatar-3.jpg"
              alt=""
            />
          </div>
          <h1>
            Become an <br /> instructor
          </h1>
        </div>
        <div className="right">
          <p>
            Top instructors from around the world teach <br /> thousands of
            teachers on CENTA. We provide the <br /> tools and skills to teach
            what you love
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="left">
          <h1>Earn money</h1>
          <p>Earn money every time a teacher purchases your course.</p>
        </div>
        <div className="right">
          <h1>Inspire teachers</h1>
          <p>
            Help people learn new skills, advance their careers, and explore
            their hobbies by sharing your knowledge.
          </p>
        </div>
        <div>
          <h1>Join our community</h1>
          <p>
            Take advantage of our active community of <br /> instructors to help
            you through your course creation process.
          </p>
        </div>
      </div>
      <div className="footer">
        <button>Start Searching Today</button>
      </div>
    </div>
  );
};

export default BecomeInstructor;
