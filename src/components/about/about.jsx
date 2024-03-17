import React, { useEffect, useState } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const aboutImage = process.env.PUBLIC_URL + "/images/aboutPic.png";
  const aboutBigImage = process.env.PUBLIC_URL + "/images/aboutBigPic.png";
  const { t } = useTranslation();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 550);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 550);
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
              <img src={aboutBigImage} alt="About Doctor Care" />
            ) : (
              <img src={aboutImage} alt="About Doctor Care" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
