import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCustomerRequest, actDeleteCustomerRequest } from '../../actions';
import CustomerList from '../../components/customer/customerListComponent';
import CustomerItem from '../../components/customer/customerComponent';

class CustomerListPage extends Component {

    componentDidMount() {
        this.props.fetchAllCustomers();
    }

    onDelete = id => {
        this.props.onDeleteCustomer(id)
    }

    render() {

        var { customers } = this.props;
        return (
            <div className="container mt-5">
                <CustomerList>
                    {this.showCustomers(customers)}
                </CustomerList>
            </div>
        );
    }

    showCustomers = customers => {
        let result = null;
        if (customers.length > 0) {
            result = customers.map((customer, index) => {
                return <CustomerItem
                    key={index}
                    customer={customer}
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
        customers: state.customers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCustomers: () => {
            dispatch(actFetchCustomerRequest())
        },
        onDeleteCustomer: (id) => {
            dispatch(actDeleteCustomerRequest(id))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomerListPage);
