import styles from "../styles/Prosject.module.css";

const Project = () => {
  return (
    <article className={styles.card}>
      <div className={styles.img}>img</div>
      {/* <img src="" alt="" /> */}
      <div className={styles.flex}>
        <div>
          <h3 className={styles.h3}>Prosjekt</h3>
          <p className={styles.p}>Litt om prosj</p>
        </div>
        <div>Icon</div>
      </div>
    </article>
  );
};

export default Project;
