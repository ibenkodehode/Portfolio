// libraries
import { Link } from "react-router-dom";

// styles
import styles from "../styles/Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>ERROR 404</h1>
      <h3>
        Gå tilbake til
        <Link to="/portfolio/" className={styles.link}>
          &nbsp;forsiden
        </Link>
      </h3>
    </div>
  );
};

export default Error;

// to do /can do
//add link to close btn on container
