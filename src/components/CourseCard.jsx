import React from "react";
import ".././styles/CourseCard.css";
const CourseCard = ({image}) => {
  return (
    <>
      <div className="course_card_container">
        <div className="card_image">
          <img
            src={image}
            alt=""
          />
        </div>
        <div className="card_content">
          <div className="card_icons">
            <div className="level_icons">Advanced</div>
            <i class="fa-solid fa-heart"></i>
          </div>
          <h3>Getting Started with Active Learning</h3>
          <p>By : Brooklyn Simmons</p>
        </div>
          <hr style={{color:"gray",height:"0.1px"}}/>
        <div className="card_footer">
            <h2>$600</h2>
            
            <span><i style={{color:"#2993d1"}} class="fa-solid fa-cart-shopping"></i> Purchase Now</span>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
