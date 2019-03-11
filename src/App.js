import React, { Component, Suspense } from 'react';
import routes from './routers';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './components/header/headerComponent';
import MenuComponent from './components/menu/menuComponent';
import { withTranslation } from 'react-i18next';

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>

  }

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
    return (
      <div className="App">
        <Router>
          <div className="App">
            <HeaderComponent onChangeLng={changeLanguage} />
            <div className="container-fluid">
              <MenuComponent />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container">
                  <h2>{t('title')}</h2>
                  <div className="row">
                    {this.showContentMenus(routes)}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);




// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Welcome />
    </Suspense>
  );
}



// export default App;
