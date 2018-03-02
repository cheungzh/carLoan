import { combineReducers } from 'redux';

import { quantityByIds, chooseIds } from './cart';
import { addedIds, productsById } from './product';

export default combineReducers({
  quantityByIds,
  chooseIds,
  addedIds,
  productsById
})