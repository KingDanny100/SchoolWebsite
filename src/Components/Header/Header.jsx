import React, { useEffect, useState } from "react";
import headImg from "../../../Images/colourpencils.avif";
import headImg1 from "../../../Images/apple.avif";
import headImg2 from "../../../Images/walkway.avif";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./Header.css";

const headContent = [
  {
    info: `Unleash`,
    secondinfo: `your child's full potential`,
    image: headImg,
    backgroundImage: `url(${headImg})`,
  },
  {
    info: `Learn`,
    secondinfo: `deeply, learn forever`,
    image: headImg1,
    backgroundImage: `url(${headImg1})`,
  },
  {
    info: `Inspire`,
    secondinfo: `a great love for learning`,
    image: headImg2,
    backgroundImage: `url(${headImg2})`,
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideLength = headContent.length;
  const autoscroll = true;
  let slideInterval;
  let intervalTime = 7000;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % headContent.length);
  };

  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (autoscroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="arrow prev" onClick={goPrev}>
        <ArrowBackIosNewRoundedIcon sx={{ fontSize: 40 }}/>
      </div>
      <div className="arrow next" onClick={goNext}>
        <ArrowForwardIosRoundedIcon sx={{ fontSize: 40 }} />
      </div>

      {headContent.map((slide, index) => {
        return (
          <div
            className={index === currentIndex ? `slide current` : "slide"}
            key={index}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            {index === currentIndex && (
              <div className="content">
                <h1>{slide.info}</h1>
                <h2>{slide.secondinfo}</h2>
                {/* <button className="home_button">Book Now</button> */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
