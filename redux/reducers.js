import * as ActionTypes from '../constants/actionTypes';

const defalutState = {
  snowFlakes: [],
};

export default (state = defalutState, action) => {
  console.log(state);
  switch(action.type) {
    case ActionTypes.CREATE_SNOWFLAKE:
      const newState = { ...state };
      newState.snowFlakes.push(state.snowFlakes.length);
      return newState;
    default:
      return state;
  }
}