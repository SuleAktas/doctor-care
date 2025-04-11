import React, { useState } from 'react';
import './Header.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function Header() {
	const spainFlag = process.env.PUBLIC_URL + '/images/Spain-Flag.png';
	const turkeyFlag = process.env.PUBLIC_URL + '/images/Turkey-Flag.png';
	const headerImage = process.env.PUBLIC_URL + '/images/headerIcon.png';

	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = language => {
		i18n.changeLanguage(language);
	};

	const openNav = () => {
		setIsOpen(true);
	};

	const closeNav = () => {
		setIsOpen(false);
	};

	return (
		<div className="header">
			<div className="header-title">
				Doctor<b className="header-title-bold">Care</b>
			</div>
			<div className="links-wider-page">
				<button className="link-style selected">{t('headerLink1')}</button>
				<button className="link-style">{t('headerLink2')}</button>
				<button className="link-style">{t('headerLink3')}</button>
				<button className="link-style">{t('headerLink3')}</button>
			</div>
			<div className="button-wider-page">
				<div className="info-button2">
					<div className="info-btn-text2"> {t('headerButton')}</div>
				</div>
			</div>
			<div
				id="mySidenav"
				className={`sidenav ${isOpen ? 'open' : ''}`}
				style={{ width: isOpen ? '250px' : '0' }}
			>
				<button className="link-style closebtn" onClick={closeNav}>
					&times;
				</button>
				<button className="link-style">{t('headerLink1')}</button>
				<button className="link-style">{t('headerLink2')}</button>
				<button className="link-style">{t('headerLink3')}</button>
				<button className="link-style">{t('headerLink3')}</button>

				<div className="header-button">
					<div className="header-btn-text"> {t('headerButton')}</div>
				</div>
			</div>

			<div className="menu-button">
				<button className="link-style icon-button" onClick={openNav}>
					<img src={headerImage} alt=" Header Icon" />
				</button>
			</div>
			<div className="flags">
				<button
					className="link-style"
					onClick={() => handleLanguageChange('es')}
				>
					<img src={spainFlag} alt="Spain Flag" />
				</button>

				<button
					className="link-style"
					onClick={() => handleLanguageChange('tr')}
				>
					<img src={turkeyFlag} alt="Turkey Flag" />
				</button>
			</div>
		</div>
	);
}

export default Header;
