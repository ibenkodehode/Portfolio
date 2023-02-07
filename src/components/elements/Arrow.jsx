// icons
import { FiArrowUp } from "react-icons/fi";

// styles
import styles from "../styles/Arrow.module.css";

const Arrow = () => {
  return (
    <div className={styles.arrow}>
      <a href="#top-page">
        <FiArrowUp color="white" />
      </a>
    </div>
  );
};

export default Arrow;
