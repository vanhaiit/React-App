import * as Type from './../constants/ActionTypes';
var initialState = [];
var findIndex = (customers, id) => {
    var result = -1;
    customers.forEach((customer, index) => {
        if (customer.id === id) {
            result = index;
        }
    });
    return result;
}
const customers = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {

        case Type.FETCH_CUSTOMERS:
            state = action.customers;
            return [...state];

        case Type.DELETE_CUSTOMER:
            index = findIndex(state, action.id);
            state.splice(index, 1)
            return [...state];
        default:
            return [...state]

    }
};
export default customers;