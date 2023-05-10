import React from "react";
import ".././styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="foote_wrapper">
        <div className="company">
          <h2>Company</h2>
          <p>About</p>
          <p>Leadership</p>
          <p>Careers</p>
          <p>Catalog</p>
          <p>Webinars</p>
          <p>News & Awards</p>
          <p>CENTA® Standards</p>
          <p>CENTA® for Governments</p>
          <p>CENTA® for Schools</p>
          <p>CENTA® for Parents</p>
        </div>
        <div className="community">
          <h2>Community</h2>
          <p>CENTA® Ambassadors</p>
          <p>Wall of Fame</p>
          <p>The Future of Teaching</p>
          <p>Insights from our work</p>
          <p>Become an Instructor</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Partners</p>
        </div>
        <div className="support">
          <h2>Support</h2>
          <p>Helpa and Support</p>
          <p>Get the app</p>
          <p>FAQ's</p>
          <p>Tutorial</p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>
            3rd Floor, SLV Complex, #22, 80 Ft. <br /> Road, Indiranagar, HAL
            3rd Stage, <br /> Bengaluru – 560075 Email: team@centa.org
          </p>
          <p>Email: team@centa.org</p>
          <p>
            Phone: <strong>+91 6366219712</strong>
          </p>
          <div className="images">
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
      </div>
    </>
  );
};

export default Footer;
