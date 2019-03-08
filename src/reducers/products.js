import * as Type from './../constants/ActionTypes';
var initialState = [];
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id == id) {
            result = index;
        }
    });
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {

        case Type.FETCH_PRODUCTS:
            state = action.products;
            return [...state];

        case Type.ADD_PRODUCT:
            state.push(action.product);
            return [...state];

        case Type.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1)
            return [...state]

        case Type.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state]

        default:
            return [...state]

    }
};
export default products;