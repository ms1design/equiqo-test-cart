import { ADD_PRODUCT_TO_CART, CHECKOUT } from '../constants';

const addToCart = (state, action) => {
  let index = -1;
  const newState = state;

  newState.find((obj, i) => {
    const check = obj.product === action.payload.value.product;
    if (check) index = i;
    return check;
  });

  if (index !== -1) {
    newState[index].qty += 1;
  } else {
    newState.push({ ...action.payload.value, ...{ qty: 1 } });
  }

  return newState;
};

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addToCart(state, action);
    case CHECKOUT:
      return [];
    default:
      return state;
  }
}
