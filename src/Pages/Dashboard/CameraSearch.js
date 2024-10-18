import React from "react";
import styles from './CameraSearch.module.css';

const CameraSearch = () => {
  return (
    <section className={styles.container}>
      <div className={styles.cameraTypeWrapper}>
        <nav className={styles.cameraTypeContainer}>
          <button className={styles.myCameras}>My cameras</button>
          <button className={styles.sharedCameras}>Shared Cameras</button>
        </nav>
      </div>
      <form className={styles.searchContainer}>
        <label htmlFor="cameraSearch" className={styles['visually-hidden']}>Search camera, Location, Model no.</label>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca11e998a826a1542bdcb5314fc12726d9701b902791e80f588c8e2afa59953d?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1" className={styles.searchIcon} alt="" />
        <input
          type="text"
          id="cameraSearch"
          className={styles.searchText}
          placeholder="Search camera, Location, Model no."
          aria-label="Search camera, Location, Model no."
        />
      </form>
    </section>
  );
};

export default CameraSearch;