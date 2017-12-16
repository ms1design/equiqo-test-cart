import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import cart from './cart';

export default combineReducers({
  user,
  runtime,
  cart,
});
