import React, { Suspense } from 'react';
import routes from './routers';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './components/header/headerComponent';
import MenuComponent from './components/menu/menuComponent';

import { useTranslation } from 'react-i18next';


function Main() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>
  }
  return (
    <div className="App">
      <Router>
        <div className="App">
          <HeaderComponent onChangeLng={changeLanguage} />
          <div className="container-fluid">
            <MenuComponent />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="container">
                <div className="row">
                  <h2>{t('title')}</h2>;
                  {showContentMenus(routes)}
                </div>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}

// loading component for suspence fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
}



// export default App;
