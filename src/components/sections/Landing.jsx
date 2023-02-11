// styles
import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.firstname}>Iben</h1>
        <h1 className={styles.lastname}>Tolleshaug</h1>
        <p className={styles.p}> - frontendstudent</p>
      </div>
    </section>
  );
};

export default Landing;
