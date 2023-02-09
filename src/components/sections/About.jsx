import styles from "../styles/About.module.css";
import portrait from "../../img/ibn.png";

const About = () => {
  return (
    <section id="om">
      <h3 className={styles.header}>Kort om meg</h3>
      <div className={styles.card}>
        <img src={portrait} alt="portrait" className={styles.portrait} />
        <div className={styles.text}>
          <h3>Jeg, meg og mitt </h3>
          <p>
            Med utvannet sørlandsdialekt, tre spørsmål på tippen av tungen og en
            kompakt chihuahua tvinnet rundt ankelen er jeg stadig på let etter
            mitt neste prosjekt som vil vekke interessen min. Programmering gikk
            fra å løse enkle irritasjonsmomenter som utforming av e-bøker til å
            bli noe jeg ønsker å gjøre proffesjonelt. Det er kontinuerlig nye
            oppdateringer å utforske, og det er et felt jeg stortrives i.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
