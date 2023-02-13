import styles from "../styles/About.module.css";
import portrait from "../../img/ibn.png";

const About = () => {
  return (
    <section id="om">
      <div className={styles.card}>
        <div className={styles.imgWrap}>
          <img src={portrait} alt="portrait" className={styles.portrait} />
        </div>

        <div className={styles.text}>
          <p className={styles.p}>
            Med utvannet sørlandsdialekt, tre spørsmål på tippen av tungen og en
            kompakt chihuahua tvinnet rundt ankelen er jeg stadig på let etter
            mitt neste prosjekt som vil vekke interessen min.
          </p>
          <p className={styles.p}>
            Programmering gikk fra å løse enkle irritasjonsmomenter som
            utforming av e-bøker til å bli noe jeg ønsker å gjøre profesjonelt.
            Det er kontinuerlig nye oppdateringer å utforske, og det er et felt
            jeg stortrives i.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
