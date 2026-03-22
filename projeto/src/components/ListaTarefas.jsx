import { ItemTarefa } from "./ItemTarefa";
import styles from "../styles/ListaTarefas.module.css";

export function ListaTarefas({ tarefas, alternarTarefa, excluirTarefa }) {
  return (
    <div className={styles.container}>
      {tarefas.map((tarefa) => (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          alternarTarefa={alternarTarefa}
          excluirTarefa={excluirTarefa}
        />
      ))}
    </div>
  );
}