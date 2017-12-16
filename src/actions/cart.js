/* eslint-disable import/prefer-default-export */

import { ADD_PRODUCT_TO_CART } from '../constants';

export function addProductToCart({ value }) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      value,
    },
  };
}
