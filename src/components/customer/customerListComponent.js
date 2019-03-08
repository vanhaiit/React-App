import React, { Component } from 'react';


class CustomerListComponent extends Component {
    render() {
        return (
            <div className="products">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">ID</th>
                            <th scope="col">Mã</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Đại Chỉ</th>
                            <th scope="col">SDT</th>
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

export default CustomerListComponent;
