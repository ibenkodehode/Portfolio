//styles
import styles from "../styles/Project.module.css";

//icons
import { SiGithub } from "react-icons/si"; //github
import { BiArrowToBottom } from "react-icons/bi"; //arrow

//library
import { useState } from "react";

const Project = (props) => {
  const [clss, setClss] = useState(styles.hide);
  const changeClss = () => {
    console.log("you just clicked to change class");
    if (clss === styles.hide) {
      setClss(styles.show);
    } else {
      setClss(styles.hide);
    }
  };

  const handleMouseLeave = () => {
    setClss(styles.hide);
  };

  return (
    <div
      className={styles.card}
      style={{ "--hover_color": props.hoverColor }}
      onMouseLeave={handleMouseLeave}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${props.src})` }}>
        <div className={styles.hover}>
          <h2 className={styles.h2}>Språk og vertøy brukt i prosjektet</h2>
          <div className={styles.icons}>{props.icon}</div>
          <BiArrowToBottom onClick={changeClss} className={styles.arrow} />
          <div className={clss}>
            <p className={styles.about}>{props.about}</p>
            <p className={styles.about}>
              Sjekk ut mer på Github eller prosjektet live{" "}
            </p>
            <a href={props.link} className={styles.link} target="_blank">
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
};

export default Project;
