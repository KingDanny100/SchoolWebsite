import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Program from "../Programs/Program";
import schoolImg from "../../../Images/schoolField.avif";
import { Mail, Phone, PhoneAndroid } from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();

  const handleEnrollButton = () => {
    navigate("/enroll");
  };
  return (
    <>
      <Header />
      <div className="home_container">
        <div className="home_head">
          <h2>
            Vision Academy is a highly rated, well-organised private school with
            a standard and quality educational system.
          </h2>
          <aside className="home_aside">
            <p>
              We are still accepting applications for grades K-1 and 4-8 during
              the 2024-2025 school year.
            </p>
          </aside>
        </div>
        <section className="enroll_head">
          <h1>Enroll Today</h1>
          <div className="image_aside">
            <img src={schoolImg} alt="School image" />
          </div>
          <button type="button" onClick={handleEnrollButton}>
            BEGIN ENROLLMENT
          </button>
        </section>
        <div className="request_div">
          <aside className="contact_info">
            <p>For questions or to send a request,</p>
            <h4>Admissions Team</h4>
            <p className="align_span">
              <span className="icon_span">
                <Mail />
              </span>{" "}
              <span className="enroll_span">enroll@visionacademy.edu.ng </span>
            </p>
            <p className="align_span">
              <span className="icon_span">
                <Phone />
              </span>{" "}
              <span className="enroll_span">+234 806 377 5427 || +234 904 864 8728</span>
            </p>
          </aside>
        </div>
      </div>
      <Program />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
