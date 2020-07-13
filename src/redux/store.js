import { createStore } from "redux";
import harboursReducer from "./harbours";

const store = createStore(harboursReducer);

export default store;
