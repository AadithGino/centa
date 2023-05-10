import React, { useState } from "react";
import ".././styles/MostPopularCourses.css";
import CourseCard from "./CourseCard";

const MostPopularCourses = () => {
  const [selected, setSelected] = useState("Self-Placed");
  const self = [
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-javascript.jpg",
      level: "Advanced",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-node.jpg",
      level: "Intermediate",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-laravel.jpg",
      level: "Beginner",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-graphql.jpg",
      level: "Beginner",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-angular.jpg",
      level: "Beginner",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-laravel.jpg",
      level: "Beginner",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-node.jpg",
      level: "Beginner",
    },
    {
      image:
        "https://mycenta-dev.netlify.app/images/course/course-graphql.jpg",
      level: "Beginner",
    },
    
  ];

  const select = (text) => {
    setSelected(text);
  };
  return (
    <>
      <div className="most_popular_courses_container">
        <h1>Most Popular Courses</h1>
        <h3>We offer a wide varitey of courses all skill levels and topics</h3>
        <div className="courses_navbar">
          <div
            onClick={() => select("Self-Placed")}
            className={selected === "Self-Placed" ? "selected" : ""}
          >
            Self-Placed Courses
          </div>
          <div
            onClick={() => select("Certifications")}
            className={selected === "Certifications" ? "selected" : ""}
          >
            Certifications
          </div>
          <div
            onClick={() => select("Training")}
            className={selected === "Training" ? "selected" : ""}
          >
            Live Training
          </div>
          <div
            onClick={() => select("Masterclass")}
            className={selected === "Masterclass" ? "selected" : ""}
          >
            Expert Masterclass
          </div>
          <div
            onClick={() => select("Webinars")}
            className={selected === "Webinars" ? "selected" : ""}
          >
            Webinars
          </div>
        </div>
        <div className="courses_container">
         {self.map((m)=>{
          return(
            <CourseCard image={m.image}/>
          )
         })}
        </div>
      </div>
    </>
  );
};

export default MostPopularCourses;
