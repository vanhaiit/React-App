import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import CustomerListPage from './pages/CustomerListPage/CustomerListPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    }, {
        path: '/products',
        exact: true,
        main: () => <ProductListPage></ProductListPage>
    },
    {
        path: '/products/add',
        exact: true,
        main: ({ history }) => <ProductActionPage history={history}></ProductActionPage>
    },
    {
        path: '/products/:id',
        exact: true,
        main: ({ match, history }) => <ProductActionPage match={match} history={history}></ProductActionPage>
    },
    {
        path: '/customers',
        exact: true,
        main: ({ history }) => <CustomerListPage history={history}></CustomerListPage>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    }
]
export default routes;