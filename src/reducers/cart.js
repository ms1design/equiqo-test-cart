import { ADD_PRODUCT_TO_CART, CHECKOUT } from '../constants';

export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      state[Object.keys(state).length + 1] = action.payload.value;
      return {
        ...state,
      };
    case CHECKOUT:
      return {
        ...{},
      };
    default:
      return state;
  }
}
