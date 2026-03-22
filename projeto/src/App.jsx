import { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { EntradaTarefa } from "./components/EntradaTarefa";
import { ListaTarefas } from "./components/ListaTarefas";
import { Rodape } from "./components/Rodape";

export function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  function alternarTarefa(id) {
    setTarefas(
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function limparTarefas() {
    setTarefas([]);
  }

  return (
    <div
      style={{
           width: "400px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid black",
   boxShadow: "0 0 10px #0056b3, 0 0 30px #0056b3"
      }}
    >
      <Cabecalho />

      <EntradaTarefa
        adicionarTarefa={adicionarTarefa}
        limparTarefas={limparTarefas}
      />

      <ListaTarefas
        tarefas={tarefas}
        alternarTarefa={alternarTarefa}
        excluirTarefa={excluirTarefa}
      />

      <Rodape tarefas={tarefas} />
    </div>
  );
}