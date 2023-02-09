import styles from "../styles/Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.card} style={{ "--hover_color": props.hoverColor }}>
      <div className={styles.wrap}>
        <img src={props.src} alt={props.alt} className={styles.img} />
        <div className={styles.overlay}>
          <a href={props.link} className={styles.link} target="_blank">
            {props.link}
          </a>
          <div className={styles.icon}>{props.icon}</div>
        </div>
      </div>

      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
};

export default Project;
