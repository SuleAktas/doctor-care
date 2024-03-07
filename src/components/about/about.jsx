import React, { useEffect, useState } from "react";
import aboutImage from "../../assets/images/aboutPic.png";
import aboutBigImage from "../../assets/images/aboutBigPic.png";
import "./about.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

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
          <div className="about-mini-title">{t("aboutMiniTitle")}</div>
          <div className="about-title">{t("aboutTitle")}</div>
          <div className="about-exp">{t("aboutExp")}</div>
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
