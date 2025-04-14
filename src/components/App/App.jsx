import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Solution from '../Solution/Solution';
import { useTranslation } from 'react-i18next';
import Achievements from '../Achievements/Achievements';

function App() {
  const { t } = useTranslation();

  const solutions = [
    { title: t('solution1Title'), text: t('solution1Exp') },
    { title: t('solution2Title'), text: t('solution2Exp') },
    { title: t('solution3Title'), text: t('solution3Exp') },
    { title: t('solution4Title'), text: t('solution4Exp') },
    { title: t('solution5Title'), text: t('solution5Exp') },
    { title: t('solution6Title'), text: t('solution6Exp') },
  ];

  return (
    <>
      <Header />

      <Achievements />

      <div className="solution">
        <div className="solution-main">
          <div className="solution-main-mini-title">{t('solutionMiniTitle')}</div>
          <div className="solution-main-title">{t('solutonMainTitle')}</div>
        </div>
        <div className="solution-boxes">
          {solutions.map((solution, index) => (
            <Solution key={index} title={solution.title} text={solution.text} />
          ))}
        </div>
      </div>
      <About />
      <img />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
