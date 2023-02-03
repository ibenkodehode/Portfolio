import styles from "../styles/About.modules.css";

const About = () => {
  return (
    <section id="om" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.oval}>
          <h3>Jeg, meg og mitt</h3>

          <div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
