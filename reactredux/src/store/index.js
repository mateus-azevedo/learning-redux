import { createStore } from "redux";
// createStore cria um estado global, onde fica armazenado boa parte das informações

import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
