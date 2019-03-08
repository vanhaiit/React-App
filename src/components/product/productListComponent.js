import React, { Component } from 'react';

class ProductListComponent extends Component {
    render() {
        return (
            <div className="products">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">stt</th>
                            <th scope="col">Mã</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductListComponent;
