import harbourData from "../../data/harbourData";
//action types go in here

//action creators go in here

//reducers here
const initialState = harbourData;

const harboursReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default harboursReducer;
