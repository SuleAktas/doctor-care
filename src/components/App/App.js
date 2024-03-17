import "./App.css";
import { useEffect } from "react";
import About from "../About/About";
import Achievement from "../Achievement/Achievement";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Solution from "../Solution/Solution";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const lang = window.location.pathname.startsWith("/tr") ? "tr" : "es";

  const solutions = [
    { title: t("solution1Title"), text: t("solution1Exp") },
    { title: t("solution2Title"), text: t("solution2Exp") },
    { title: t("solution3Title"), text: t("solution3Exp") },
    { title: t("solution4Title"), text: t("solution4Exp") },
    { title: t("solution5Title"), text: t("solution5Exp") },
    { title: t("solution6Title"), text: t("solution6Exp") },
  ];

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <Info />
      <div className="achievement">
        <Achievement number=" +3.500" text={t("achievement1")} />
        <Achievement number="+15" text={t("achievement2")} />
        <Achievement number="+10" text={t("achievement3")} />
      </div>

      <div className="solution">
        <div className="solution-main">
          <div className="solution-main-mini-title">
            {t("solutionMiniTitle")}
          </div>
          <div className="solution-main-title">{t("solutonMainTitle")}</div>
        </div>
        <div className="solution-boxes">
          {solutions.map((solution, index) => (
            <Solution key={index} title={solution.title} text={solution.text} />
          ))}
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
