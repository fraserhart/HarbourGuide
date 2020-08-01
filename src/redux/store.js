import { createStore, combineReducers } from "redux";
import {
  harboursReducer,
  activeHarbourReducer,
  filtersReducer,
} from "./harbours";

const store = createStore(
  combineReducers({
    harbours: harboursReducer,
    activeHarbour: activeHarbourReducer,
    filters: filtersReducer,
  })
);

export default store;
