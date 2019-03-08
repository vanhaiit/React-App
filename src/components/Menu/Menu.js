import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Sản phẩm',
        to: '/products',
        exact: false
    },
    {
        name: 'Khách hàng',
        to: '/customers',
        exact: false
    }
]
const MenuLink = ({ label, to, aciveExact }) => {
    return (
        <Route
            path={to}
            exact={aciveExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className="nav-item">
                        <Link to={to} className={`nav-link ${active}`}>
                            {label}
                        </Link>
                    </li>


                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>

        );
    }
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} aciveExact={menu.exact}>
                    </MenuLink>
                );
            })
        }
        return result;
    }
}

export default Menu;
