import { INPUT_ERROR, FAV_ERROR } from "../actions/types";

const errorReducer = (state = "", { type, payload }) => {
  switch (type) {
    case INPUT_ERROR:
      return {
        inputError: payload
      };
    default:
      return state;
  }
};
export default errorReducer;
