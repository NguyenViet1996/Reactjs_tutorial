import { INCREMENT, DECREMENT } from "../action/types";

const INITITAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
