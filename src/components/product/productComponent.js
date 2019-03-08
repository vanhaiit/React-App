import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductComponent extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc rằng muốn xóa sản phẩm này.!')) {//eslint-disable-line
            this.props.onDelete(id)
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'còn hàng' : 'hết hàng';
        var statusClass = product.status ? 'success' : 'danger';
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`text-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/products/${product.id}`} type="button" className="btn btn-success btn-sm ml-2">sửa</Link>
                    <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr >
        );
    }
}

export default ProductComponent;
