import React, { Component } from 'react';
import routes from './routers';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './components/header/headerComponent';
import MenuComponent from './components/menu/menuComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderComponent />
          <div className="container-fluid">
            <MenuComponent />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="container">
                <div className="row">
                  {this.showContentMenus(routes)}
                </div>
              </div>
            </main>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
