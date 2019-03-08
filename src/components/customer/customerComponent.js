import React, { Component } from 'react';

class CustomerComponent extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc rằng muốn xóa khách hàng này.!')) {//eslint-disable-line
            this.props.onDelete(id)
        }
    }
    render() {
        var { customer, index } = this.props;

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{customer.id}</td>
                <td>{customer.code}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>
                    <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => this.onDelete(customer.id)}>Xóa</button>
                </td>
            </tr >
        );
    }
}

export default CustomerComponent;
