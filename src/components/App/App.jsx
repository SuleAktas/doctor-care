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
          {[...new Array(6)].map((_, index) => (
            <Solution
              key={index}
              title={t(`solution${index + 1}Title`)}
              text={t(`solution${index + 1}Exp`)}
            />
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
