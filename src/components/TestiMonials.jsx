import React, { useEffect, useState } from "react";
import ".././styles/TestiMonials.css";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestiMonials = () => {
  const [isMobile, setIsMobile] = useState(3);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
      if (window.innerWidth < 1020) {
        setIsMobile(2);
      }

      if (window.innerWidth <= 700) {
        setIsMobile(1);
      }
    }

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile,
    slidesToScroll: 1 * isMobile,
  };
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
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiMonials;
