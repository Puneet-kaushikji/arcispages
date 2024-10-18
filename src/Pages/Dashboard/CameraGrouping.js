import React from 'react';
import styles from './CameraGrouping.module.css';
import StatusItem from './StatusItem';

const CameraGrouping = () => {
  const statusItems = [
    { color: '#7bc111', label: 'Online', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1cd23bf418e92dfefdf0b657c22d7113a7d9a2c493b530c45217b3e50011c6e?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1' },
    { color: '#ef4343', label: 'Offline', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/293bc478b19283b296c2a38aeb6e7180a23ced5db116665727d3290d35756769?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1' },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Camera(10)</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/403e9191744e250fd7d4b140f9184e7e273633a4c328564c7261004eca8211e1?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.icon} />
          <span className={styles.groupingText}>Grouping</span>
        </header>
        <div className={styles.actions}>
          <button className={styles.button}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1abee545c3cda01baef3ea563436faa42c3fe65d81cd55cf7589a591f8deb0?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.buttonIcon} />
            <span>Filters</span>
          </button>
          <button className={styles.clearAll}>Clear all</button>
        </div>
        <div className={styles.statusContainer}>
          {statusItems.map((item, index) => (
            <StatusItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.disconnectedStatus}>
        <div className={styles.statusIndicator} style={{ backgroundColor: '#f67416' }} />
        <div>Disconnected</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c338591194c07f67a6f5503a30de230b32cdd9f76f46b15264417ae026b99fdc?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" alt="" className={styles.statusIcon} />
      </div>
    </section>
  );
};

export default CameraGrouping;