import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Iben</h1>
      <h1 className={styles.etternavn}>Kodehode</h1>
      <h5 className={styles.h5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <span className={styles.span}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </span>
      </h5>
    </div>
  );
};

export default Landing;
