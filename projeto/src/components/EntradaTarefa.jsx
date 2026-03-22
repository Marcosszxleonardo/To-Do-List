import { useState } from "react";
import styles from "../styles/EntradaTarefa.module.css";

export function EntradaTarefa({ adicionarTarefa, limparTarefas }) {
  const [texto, setTexto] = useState("");

  function handleAdicionar() {
    if (!texto) return;
    adicionarTarefa(texto);
    setTexto("");
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Adicionar tarefa"
      />

      <button className={styles.botao} onClick={handleAdicionar}>
        ADICIONAR
      </button>

      <button className={styles.botao} onClick={limparTarefas}>
        Limpa tudo
      </button>
    </div>
  );
}