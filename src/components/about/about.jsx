import React, { useEffect, useState } from "react";
import aboutImage from "./Pic.png";
import aboutBigImage from "./Pic-4.png";
import "./about.css";

function About() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 515);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 515);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="about">
      <div className="about-box">
        <div className="about-box-txt">
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
        </div>
        <div className="about-box-img">
          <div className="about-img">
            {isLargeScreen ? (
              <img src={aboutBigImage} alt="Large Screen" />
            ) : (
              <img src={aboutImage} alt="Small Screen" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
