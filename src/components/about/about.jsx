import React from "react";
import aboutImage from "./Pic.png";

function About() {
  return (
    <div className="about">
      <div className="about-box">
        <div className="about-mini-title">SOBRE NÓS</div>
        <div className="about-title">
          Entenda quem somos e por que existimos
        </div>
        <div className="about-exp">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </div>
        <div className="about-img">
          <img src={aboutImage} alt=" image" />
        </div>
      </div>
    </div>
  );
}

export default About;
