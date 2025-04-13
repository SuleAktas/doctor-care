import React, { useState } from 'react';
import './Header.css';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function Header() {
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
			<div className="flag-menu-box">
				<div className="menu-button">
					<button className="link-style icon-button" onClick={openNav}>
						<img src="/images/headerIcon.png" alt=" Header Icon" />
					</button>
				</div>
				<div className="flags">
					<button
						className="link-style"
						onClick={() => handleLanguageChange('es')}
					>
						<img src="/images/Spain-Flag.png" alt="Spain Flag" />
					</button>

					<button
						className="link-style"
						onClick={() => handleLanguageChange('tr')}
					>
						<img src="/images/Turkey-Flag.png" alt="Turkey Flag" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
