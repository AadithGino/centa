import React from "react";

const TestimonialCard = () => {
  return (
    <>
      <div className="testimonial_card">
        <div className="content">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eos
            autem quo labore, blanditiis officia libero velit perferendis. Ut
            magni mollitia vitae laborum molestias amet blanditiis unde eum,
            laudantium tenetur repellendus beatae aliquid quisquam.
          </p>
        </div>
        <hr />
        <div className="footer">
          <img
            src="https://mycenta-dev.netlify.app/images/avatar/avatar-3.jpg"
            alt=""
          />
          <div>
            <h2>Barry Watson</h2>
            <p>Web Developer Uk</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
