// styles
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>ERROR 404</h1>
      <h3 className={styles.h3}>
        Gå tilbake til <span className={styles.link}>forsiden</span>
      </h3>
    </div>
  );
};

export default Error;
