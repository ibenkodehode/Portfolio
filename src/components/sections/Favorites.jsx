import styles from "../styles/Favorites.module.css";

const Favorites = () => {
  return (
    <section className={styles.section} id="fav">
      <header>
        <h3 className={styles.header}>Favoritter</h3>
      </header>

      <div className={styles.first}>
        <div className={styles.text}>
          <h3>Kode</h3>
          <p className={styles.p}>
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.img}>img1</div>
      </div>

      <div className={styles.second}>
        <div className={styles.img}>img2</div>
        <div className={styles.text}>
          <h3>Kollega</h3>
          <p className={styles.p}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
