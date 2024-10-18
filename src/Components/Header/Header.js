import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const NavItem = ({ iconSrc, text }) => (
  <div className={styles.navItem}>
    <img loading="lazy" src={iconSrc} alt="" className={styles.navItemIcon} />
    <div className={styles.navItemText}>{text}</div>
  </div>
);

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Effect to check localStorage on initial render
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedMode);
  }, []);
  
  // Effect to apply the theme based on state
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    document.body.style.color = isDarkMode ? '#fff' : '#000'; 
  }, [isDarkMode]);

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.darkHeader : ''}`}>
      <div className={styles.logoContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1114720dfa5d8a53919938ea8191789f5ff6542c924cdf7d17533c23e35fccf9?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.logoIcon} />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca78d251447497e1663441079720e7917711d6f5d5758ef4406ed0691135fa2?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="Company Logo" className={styles.logoText} />
      </div>
      <nav className={styles.navContainer}>
        <button className={styles.addDeviceButton}>Add new device</button>
        <NavItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a2701095ad0d91b6d040292b027db39d478c4c5e67902f91a548f740020fe4?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" text="ArcisGPT" />
        
        <div className={styles.themeToggle}>
          <span className={styles.themeText}>Light</span>
          <div
            className={styles.toggleSwitch}
            role="switch"
            aria-checked={isDarkMode}
            tabIndex="0"
            onClick={handleToggle}
            onKeyPress={(e) => e.key === 'Enter' && handleToggle()}
          >
            <div
              className={styles.toggleSwitchKnob}
              style={{
                transform: isDarkMode ? 'translateX(100%)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
          <span className={styles.themeText}>Dark</span>
        </div>

        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a72034ed15ed04bdd7c66a030151151ecce7284d9cb2ddd2364060c9970ce591?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="Notification Icon" className={styles.navItemIcon} />
        <div className={styles.userInfo}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f8bec5fc8e1b97999327164522a0a92e4def0c1fa7e87b125b0ea26645e659?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.userIcon} />
          <div className={styles.userName}>Andrew Miller</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
