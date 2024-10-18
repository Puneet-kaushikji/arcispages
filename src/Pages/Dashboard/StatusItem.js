import React from 'react';
import styles from './CameraGrouping.module.css';

const StatusItem = ({ color, label, iconSrc }) => (
  <div className={styles.statusItem}>
    <div className={styles.statusIndicator} style={{ backgroundColor: color }} />
    <div>{label}</div>
    <img loading="lazy" src={iconSrc} alt="" className={styles.statusIcon} />
  </div>
);

export default StatusItem;