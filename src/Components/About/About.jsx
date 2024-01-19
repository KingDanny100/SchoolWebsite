import React, { useEffect, useState } from "react";
import { AboutData } from "../../Data/AboutData";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./About.css";
import Program from "../Programs/Program";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideLength = AboutData.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % AboutData.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  useEffect(() => {
    const handleInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AboutData.length);
    }, 7000);

    return () => clearInterval(handleInterval);
  }, [currentIndex]);

  return (
    <>
      <div className="about_head">
        <h1>We Believe</h1>
        <h2>All children deserve an excellent education.</h2>
      </div>
      <div className="about_container">
        <h2>About</h2>
        <div className="location_div">
          <h3>
            Vision Academy is a private, coeducational school with approximately
            950 students from age two to grade twelve.
          </h3>
          <p>
            We are located on a beautiful 72-acre campus in Guzape, Abuja. Since
            our founding in 1970, we have earned a reputation for academic
            excellence by offering the best, most well-rounded educational
            experience in the City of Abuja, Nigeria.
          </p>
        </div>
        {/* <div className="aboutcard_container">
          <div className="about_card">
            <img src={AboutData[currentIndex].image} alt="image info" />
            <section className="about_info">
              <div className="about_icons">
                    <aside className="left_icon" onClick={goPrev}><ArrowBackIosNewRoundedIcon  /></aside>
                    <aside className="right_icon" onClick={goNext}><ArrowForwardIosRoundedIcon /></aside>
                </div>
              <h4>{AboutData[currentIndex].head}</h4>
              <ul>
                <li>{AboutData[currentIndex].item1}</li>
                <li>{AboutData[currentIndex].item2}</li>
                <li>{AboutData[currentIndex].item3}</li>
              </ul>
            </section>
          </div>
        </div> */}
        <div className="misson">
          <span className="mission_head">Our Mission:</span> Vision Academy
          develops the intellectual, ethical, and interpersonal foundations
          students need to become constructive contributors to the world.
        </div>
      </div>
      <Program />
    </>
  );
};

export default About;
