import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Achievement from './components/Achievement';
import './Achievements.css';
import Info from '../Info/Info';

function Achievements() {
  const { t } = useTranslation();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 699);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="outer-box">
      <div className="info-achievement">
        <div className="inner-box">
          <Info />
          <div className="info-img">
            <img
              src={isLargeScreen ? '/images/infoPicBig.png' : '/images/infoPic.png'}
              alt="Info"
              style={{
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
        <div className="achievement">
          <Achievement number=" +3.500" text={t('achievement1')} />
          <Achievement number="+15" text={t('achievement2')} />
          <Achievement number="+10" text={t('achievement3')} />
        </div>
      </div>
    </div>
  );
}

export default Achievements;
