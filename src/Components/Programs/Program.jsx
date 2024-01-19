import React from "react";
import "./Program.css";
import loading from "../../../Images/loading.jpg";
import { Mail } from "@mui/icons-material";
import { Achievements } from "../../Data/Achievementdata";

const Program = () => {
  return (
    <div className="program_container">
      <h4>ACADEMIC SUCCESS</h4>
      <section className="all_data">
        <aside className="left_data">
          <p>
            From this year's State Data, of 203 public schools (traditional
            district and charter) in Memphis-Shelby County Schools:
          </p>
          <hr />
          <div className="data_story">
            <h3>Data tells a story. </h3>
            <p>
              The story of Believe is that we are building something that is
              uniquely different in our city that is making a measurable
              difference for our children. We are - measurably - 1 of 1.
            </p>
          </div>
        </aside>
        <aside className="right_data">
          {Achievements.map((data, index) => {
            return (
              <div className="box" key={index}>
                <div className="tiny_box"></div>
                <p className="info">{data.achievement}</p>
                <p className="school_info">{data.school}</p>
              </div>
            );
          })}
        </aside>
      </section>
    </div>
  );
};

export default Program;
