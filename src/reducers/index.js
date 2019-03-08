import { combineReducers } from 'redux';
import products from './products';
import customers from './customers';
import itemEditing from './itemEditing'
const appReducers = combineReducers({
    products,
    itemEditing,
    customers
});
export default appReducers;