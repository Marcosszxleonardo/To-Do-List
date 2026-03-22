import styles from "../styles/ItemTarefa.module.css";

export function ItemTarefa({ tarefa, alternarTarefa, excluirTarefa }) {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarTarefa(tarefa.id)}
      />

      <span
        className={styles.texto}
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none"
        }}
      >
        {tarefa.texto}
      </span>

      <button
        className={styles.botao}
        onClick={() => excluirTarefa(tarefa.id)}
      >
        EXCLUIR
      </button>
    </div>
  );
}