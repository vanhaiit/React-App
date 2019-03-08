import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

/**END:edit product */

export const actFetchCustomerRequest = () => {

    return dispatch => {
        return callApi('customers', 'GET', null).then(result => {
            dispatch(actFetchCustomer(result.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actFetchCustomer = customers => {
    return {
        type: Types.FETCH_CUSTOMERS,
        customers
    }
}

export const actDeleteCustomerRequest = id => {
    return dispatch => {
        return callApi(`customers/${id}`, 'DELETE', null).then(result => {
            dispatch(actDeleteCustomer(id))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actDeleteCustomer = id => {
    return {
        type: Types.DELETE_CUSTOMER,
        id
    }
}
