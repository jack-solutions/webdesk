import React from "react";
import "./style.scss";
import heroImg from "../../assets/heroimg.jpg";

const Herosection = ({ small, large, title, dept, sem }) => {
  console.log({ small, large });

  return (
    <div className={"heroSection " + (large ? "large" : "small")}>
      <div className="heroSection-content">
        <div className="left">
          {large && <img src={heroImg} alt="heroimage" />}
        </div>

        <div className="right">
          <h3>{small ? (dept + " " + sem + " sem") : "Hi Jane!"} </h3>
          <h1>{title}</h1>
          {large && (
            <p>
              All your college schedule, notes, task, doubts will be updated
              here
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Herosection;