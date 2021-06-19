import { createStore } from "redux";
// createStore cria um estado global, onde fica armazenado boa parte das informações

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
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

function reducer(state = INITIAL_STATE, action) {
  // retorna como o estado vai inicializar na aplicação
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
