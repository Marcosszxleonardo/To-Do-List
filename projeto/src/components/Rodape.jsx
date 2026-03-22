import styles from "../styles/Rodape.module.css";

export function Rodape({ tarefas }) {
  const concluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <div className={styles.container}>
      CONCLUÍDO ({concluidas})
    </div>
  );
}