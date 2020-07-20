import harbourData from "../../data/harbourData";
//action types go in here
export const SET_ACTIVE_HARBOUR = "SET_ACTIVE_HARBOUR";
export const CLEAR_ACTIVE_HARBOUR = "CLEAR_ACTIVE_HARBOUR";

//action creators go in here
export function setActiveHarbour(harbourId) {
  return {
    type: SET_ACTIVE_HARBOUR,
    harbourId: harbourId,
  };
}

export function clearActiveHarbour() {
  return {
    type: CLEAR_ACTIVE_HARBOUR,
  };
}

//reducers here
const initialState = harbourData;

export const harboursReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const activeHarbourReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_HARBOUR:
      return action.harbourId;
    case CLEAR_ACTIVE_HARBOUR:
      return null;
    default:
      return state;
  }
};
