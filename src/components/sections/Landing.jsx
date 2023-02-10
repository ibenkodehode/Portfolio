// styles
import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.firstname}>Iben</h1>
        <h1 className={styles.lastname}>Kodehode</h1>
        <p className={styles.depiction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span className={styles.span}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Landing;
