import harbourData from "../../data/harbourData";
//action types go in here
export const SET_ACTIVE_HARBOUR = "SET_ACTIVE_HARBOUR";
export const CLEAR_ACTIVE_HARBOUR = "CLEAR_ACTIVE_HARBOUR";
export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

//action creators go in here
export const setActiveHarbour = (harbour) => {
  return {
    type: SET_ACTIVE_HARBOUR,
    harbour,
  };
};

export const clearActiveHarbour = () => {
  return {
    type: CLEAR_ACTIVE_HARBOUR,
  };
};

export const toggleFilter = (filter) => {
  return {
    type: TOGGLE_FILTER,
    filter,
  };
};

export const clearFilters = () => {
  return { type: CLEAR_FILTERS };
};

//reducers here

export const harboursReducer = (state = harbourData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const activeHarbourReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_HARBOUR:
      return action.harbour;
    case CLEAR_ACTIVE_HARBOUR:
      return null;
    default:
      return state;
  }
};

const filtersInitialState = [];

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
      return filtersInitialState;
    default:
      return state;
  }
};
