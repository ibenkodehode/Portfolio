// icons
import { FiArrowUp } from "react-icons/fi";

// styles
import styles from "../styles/Arrow.modules.css";

const Arrow = () => {
  return (
    <div className={styles.arrow}>
      <a href="#top-page">
        <FiArrowUp />
      </a>
    </div>
  );
};

export default Arrow;
