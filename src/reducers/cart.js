import { ADD_PRODUCT_TO_CART } from '../constants';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.info(action.type, {
        _action: action,
        _state: state,
      });
      // return {
      //   ...state,
      //   cart: action.payload.value,
      // };
      return state;
    default:
      return state;
  }
}
