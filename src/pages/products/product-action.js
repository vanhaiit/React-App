import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, updateProductRequest } from '../../actions';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }

    onChange = (e) => {

        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        e.preventDefault();
        if (id)
            this.props.onUpdateProduct(product);
        else
            this.props.onAddProduct(product);
        history.goBack();
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (

            <div className="col-md-12 ">
                <br></br>
                <form className="mt-10" onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input type="text" className="form-control" name='txtName' value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="text" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" checked={chkbStatus} name="chkbStatus" value={chkbStatus} onChange={this.onChange} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Còn hàng</label>
                    </div>
                    <hr></hr>
                    <button type="submit" className="btn btn-primary">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(updateProductRequest(product))
        }
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
