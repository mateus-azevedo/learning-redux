import { combineReducers } from "redux";

import course from "./course";

export default combineReducers({
  course,
});

// TRANSFORMA O NOSSO ESTADO EM UM OBJETO COM SUBCATEGORIAS
// {
//   course: { modules: [], activeLesson: {}, activeModule: {} },
//   user: { name: '', avatar: '' }
// }
