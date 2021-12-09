import { types } from "../types/types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.obtener:
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};
