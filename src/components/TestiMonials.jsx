import React from "react";
import ".././styles/TestiMonials.css";
import TestimonialCard from "./TestimonialCard";

const TestiMonials = () => {
  return (
    <>
      <div className="testimonials_container">
       <div className="top">
       <h3>TESTIMONIALS</h3>
        <h1>Don’t just take our word for it.</h1>
        <p>12+ million people are already learning on Geeks</p>
       </div>
       <div className="middle">
        <div className="testimonial_card_container">
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        </div>
       </div>
      </div>
    </>
  );
};

export default TestiMonials;
