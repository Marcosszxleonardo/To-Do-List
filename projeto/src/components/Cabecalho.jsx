import styles from "../styles/Cabecalho.module.css";
import logo from "../assets/logo.png";

export function Cabecalho() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />

      <h2 className={styles.titulo}>TO-DO LIST</h2>
      <p className={styles.descricao}>
       <strong>Mantenha-se organizado e conclua suas tarefas.</strong> 
      </p>
    </div>
  );
}