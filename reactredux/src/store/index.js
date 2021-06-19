import { createStore } from "redux";
// createStore cria um estado global, onde fica armazenado boa parte das informações

function reducer() {
  // retorna como o estado vai inicializar na aplicação
  return {
    activeLesson: null,
    activeModule: null,
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: 1, title: "Primeira Aula" },
          { id: 2, title: "Segunda Aula" },
        ],
      },
      {
        id: 2,
        title: "Aprendendo Redux",
        lessons: [
          { id: 3, title: "Terceira Aula" },
          { id: 4, title: "Quarta Aula" },
        ],
      },
    ],
  };
}

const store = createStore(reducer);

export default store;
