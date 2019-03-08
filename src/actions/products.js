import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

/**BIGIN:get list */
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(result => {
            dispatch(actFetchProducts(result.data))
        }).catch(error => {
            console.log(error);
        })
    }

}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

/**END:get list */

/**BIGIN:add products */
export const actAddProductRequest = product => {
    return dispatch => {
        return callApi('products', 'POST', product).then(result => {
            dispatch(actAddProduct(result.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
/**END:addd products */

/**BIGIN:delete products */
export const actDeleteProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(result => {
            dispatch(actDeleteProduct(id))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actDeleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
/**END:delete products */

/**BIGIN: edit products */

export const actGetProductRequest = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(result => {
            dispatch(actGetProduct(result.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actGetProduct = product => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const updateProductRequest = product => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(result => {
            dispatch(updateProduct(result.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const updateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
