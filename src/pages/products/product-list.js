import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions';
import { Link } from 'react-router-dom'
import ProductList from '../../components/product/productListComponent';
import ProductItem from '../../components/product/productComponent';
import { Trans } from 'react-i18next';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = id => {
        this.props.onDeleteProduct(id)
    }

    render() {
        var { products } = this.props;

        return (
            <div className="container mt-5">
                <Link to='/products/add' type="button" className="btn btn-primary mt-2 mb-2"><Trans i18nKey='add' /></Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div >
        );
    }

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
