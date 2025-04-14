import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Achievement from './components/Achievement';
import './Achievements.css';
import Info from '../Info/Info';

function Achievements() {
	const { t } = useTranslation();

	useEffect(() => {
		const updatePosition = () => {
			
		};

		updatePosition();
		window.addEventListener('resize', updatePosition);
		return () => window.removeEventListener('resize', updatePosition);
	}, []);
	return (
		<div className='outer-box'>
		<div className='test_info-achievement'>
			<div className='test_inner-box'>
				<Info/>
				<div className="test_info-img" >
				<img
					src={window.innerWidth > 600 ? "/images/infoPicBig.png" : "/images/infoPic.png"}
					alt="Info"
					style={{
						height: '100%',
						objectFit: 'contain'
					}}
				/>
				</div>
			</div>
			<div className="test_achievement">
				<Achievement number=" +3.500" text={t('achievement1')} />
				<Achievement number="+15" text={t('achievement2')} />
				<Achievement number="+10" text={t('achievement3')} />
			</div>

			
		
		</div>
		</div>
	);
}

export default Achievements;
