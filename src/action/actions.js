import { INCREMENT } from "./types";
import { DECREMENT } from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: { name: "viet" },
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
