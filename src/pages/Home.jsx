import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ".././styles/Home.css";
import MostPopularCourses from "../components/MostPopularCourses";
import Instructors from "../components/Instructors";
import BecomeInstructor from "../components/BecomeInstructor";
import TestiMonials from "../components/TestiMonials";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className={isOpen?"home_container home_open":"home_container"}>
        <div className="section ">
          <div className="left">
            <h3>Join a global community of teachers and school leaders.</h3>
            <h1>Unlock your teaching potential, join us today</h1>
            <p>
              Expand your teaching carier with our comprehensuce catalog of
              coureses and certifications, designed to help you startm advance
              and enhance your career.
            </p>
            <div className="button_container">
              <button className="joinNow_button">Join Free Now</button>
              <div className="watchOverViewContainer">
                <i
                  style={{ color: "#2993d1", fontSize: "3rem" }}
                  class="fa-solid fa-circle-play"
                ></i>
                <button className="watch_overView"> Watch OverView</button>
              </div>
            </div>
            <div className="appStore_playStore_Container">
              <img
                src="https://mycenta-dev.netlify.app/images/svg/appstore.svg"
                alt=""
              />
              <img
                src="https://mycenta-dev.netlify.app/images/svg/playstore.svg"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="image_container">
              <img
                className="troffee_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/trophy.svg"
                alt=""
                srcset=""
              />
              <img
                className="speaker_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/sound.svg"
                alt=""
              />
              <img
                className="weekly_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/frame-2.svg"
                alt=""
                srcset=""
              />
              <img
                className="main_girl_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/bg-thumb.svg"
                alt=""
                srcset=""
              />
              <img
                className="main_girl_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/girl-image-2.png"
                alt=""
                srcset=""
              />
              <img
                className="instructor_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/frame-1.svg"
                alt=""
              />
              <img
                className="target_image"
                src="https://mycenta-dev.netlify.app/images/background/acedamy-img/target.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="section_2">
          <div className="section2_item section2_item_1">
            <i style={{ color: "#2993d1" }} class="fa-solid fa-medal"></i>
            <h1>316,000+</h1>
            <p>Centra Certifications</p>
          </div>
          <div className="section2_item section2_item_2">
            <i style={{ color: "orange" }} class="fa-solid fa-users"></i>
            <h1>1 Million+</h1>
            <p>Teachers</p>
          </div>
          <div className="section2_item section2_item_3">
            <i style={{ color: "#2993d1" }} class="fa-solid fa-house"></i>
            <h1>90,000+</h1>
            <p>Schools</p>
          </div>
          <div className="section2_item section2_item_4">
            <i style={{ color: "green" }} class="fa-solid fa-compass"></i>
            <h1>6500+</h1>
            <p>Locations</p>
          </div>
        </div>
        <MostPopularCourses />
        <Instructors />
        <BecomeInstructor />
        <hr />
        <TestiMonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;
