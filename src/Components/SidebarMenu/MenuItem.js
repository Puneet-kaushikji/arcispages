import React from 'react';
import styles from './SidebarMenu.module.css';

const MenuItem = ({ icon, text, isActive }) => {
  return (
    <li className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ''}`}>
      <img src={icon} alt="" className={styles.menuIcon} />
      <span className={styles.menuText}>{text}</span>
    </li>
  );
};

export default MenuItem;