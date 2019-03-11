import React, { Component } from 'react';


class HeaderComponent extends Component {

    onChangeLng = (lng) => {
        this.props.onChangeLng(lng)
    }

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" style={{ fontWeight: 'bold' }} href="#">React JS - APP</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => this.onChangeLng('vn')}>vn</button>
                        <button type="button" className="btn btn-primary btn-sm ml-2" onClick={() => this.onChangeLng('en')}>en</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default HeaderComponent;
