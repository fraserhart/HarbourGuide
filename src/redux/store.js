import { createStore, combineReducers } from "redux";
import { harboursReducer, activeHarbourReducer } from "./harbours";

const store = createStore(
  combineReducers({
    harbours: harboursReducer,
    activeHarbour: activeHarbourReducer,
  })
);

export default store;
