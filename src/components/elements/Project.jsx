import styles from "../styles/Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.card} style={{ "--hover_color": props.hoverColor }}>
      <img src={props.src} alt={props.alt} className={styles.img} />
      <div className={styles.flex}>
        <div>
          <h3 className={styles.h3}>{props.title}</h3>
          <p className={styles.p}>{props.link}</p>
        </div>
        <div>{props.icon}</div>
      </div>
    </div>
  );
};

export default Project;
