import styles from "../styles/About.module.css";
import portrait from "../../img/ibn.png";

const About = () => {
  return (
    <section id="om">
      <div className={styles.card}>
        <img src={portrait} alt="portrait" className={styles.portrait} />
        <div className={styles.text}>
          <h3>Jeg, meg og mitt</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
