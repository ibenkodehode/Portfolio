//styles
import styles from "../styles/Favorites.module.css";

//img

import indie from "../../img/indie.png";
import work from "../../img/work.png";

const Favorites = () => {
  return (
    <section id="fav">
      <div className={styles.wrap}>
        <img
          src={work}
          alt="image of a person in orange overalls with a chihuahua hiding behind their leg"
          className={styles.overalls}
        />
        <p className={styles.p}>
          Bruker helst sommerene på pappas tomt med en høytrykkspyler.
        </p>
      </div>

      <div className={styles.wrap}>
        <p className={styles.p}>
          Ville bare bruke anledningen til å vise frem favorittkollegaen min
        </p>
        <img
          src={indie}
          alt="image of a chihuahua with a headset"
          className={styles.indie}
        />
      </div>
    </section>
  );
};

export default Favorites;
