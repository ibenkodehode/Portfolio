// styles
import styles from "../styles/Landing.module.css";

// components
import Icons from "../elements/CodeLanguage";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <article className={styles.intro}>
        <h1 className={styles.head}>Iben</h1>
        <h1 className={styles.etternavn}>Kodehode</h1>
        <p className={styles.h5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span className={styles.span}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </span>
        </p>
      </article>
      <article className={styles.icon}>
        <Icons />
      </article>
    </section>
  );
};

export default Landing;
