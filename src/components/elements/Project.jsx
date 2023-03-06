//styles
import styles from "../styles/Project.module.css";

//icons
import { SiGithub } from "react-icons/si"; //github
import { BsFillPlayCircleFill } from "react-icons/bs"; //webpage
import { FiArrowDown } from "react-icons/fi"; //arrow

//library
import { useState } from "react";

const Project = (props) => {
  const [rotation, setRotation] = useState(0);
  const [clss, setClss] = useState(styles.hide);

  const changeClss = () => {
    if (clss === styles.hide) {
      setRotation(180);
      setClss(styles.show);
    } else {
      setRotation(0);
      setClss(styles.hide);
    }
  };

  const handleMouseLeave = () => {
    setClss(styles.hide);
    setRotation(0);
  };

  return (
    <div
      className={styles.card}
      style={{ "--hover_color": props.hoverColor }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${props.src})` }}
      >
        <div className={styles.hover}>
          <h2 className={styles.h2}>Språk og vertøy brukt i prosjektet</h2>
          <div className={styles.icons}>{props.icon}</div>

          <div className={clss}>
            <p className={styles.about}>{props.about}</p>
            <p className={styles.p}>
              Sjekk ut koden på Github eller se prosjektet live
            </p>
            <div className={styles.links}>
              <a href={props.link} className={styles.link} target="_blank">
                <SiGithub />
              </a>
              <a href={props.web} className={styles.link} target="_blank">
                <BsFillPlayCircleFill />
              </a>
            </div>
          </div>
          <FiArrowDown
            onClick={changeClss}
            className={styles.arrow}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
};

export default Project;

// const changeClss = () => {
//   if (clss === styles.hide) {
//     setRotation(180);
//     setClss(styles.show);
//   } else {
//     setRotation(0);
//     setClss(styles.hide);
//   }
// };
