import "./App.css";
import About from "./components/about/about";
import Achievement from "./components/achievement/achievement";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Solution from "./components/solution/solution";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
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
          <Solution title={t("solution1Title")} text={t("solution1Exp")} />

          <Solution title={t("solution2Title")} text={t("solution2Exp")} />

          <Solution title={t("solution3Title")} text={t("solution3Exp")} />

          <Solution title={t("solution4Title")} text={t("solution4Exp")} />

          <Solution title={t("solution5Title")} text={t("solution5Exp")} />

          <Solution title={t("solution6Title")} text={t("solution6Exp")} />
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
