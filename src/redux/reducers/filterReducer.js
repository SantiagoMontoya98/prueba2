import { types } from "../types/types";

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.filtrar:
      return {
        filter: action.payload,
      };

    default:
      return state;
  }
};
