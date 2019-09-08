import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store, persistor } from "./components/redux/store";
import { Provider } from "react-redux";
import Layout from "./components/layout/pages/HomePageLayout";
import { PersistGate } from "redux-persist/integration/react";
import LoginRoute from "./components/Routes/LoginRoute";
import AuthRoute from "./components/Routes/AuthRoute";
import ScrollToTopRoute from "./components/Routes/ScrollToTopRoute";
import "react-toastify/dist/ReactToastify.css";
import OAuth2RedirectHandler from "./components/Modals/Login/OAuthRedirectHandler";
import Homepage from "./components/layout/Homepage";

class App extends Component {

  render() {
    return (
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className="Test">
              <Layout>
                <Switch>
                  <ScrollToTopRoute exact path="/" component={Homepage} />
                  <LoginRoute exact path="/login" component={Homepage} />
                  <LoginRoute exact path="/register" component={Homepage} />
                  <Route
                    path="/oauth2/redirect"
                    component={OAuth2RedirectHandler}
                  />
                </Switch>
              </Layout>
            </div>
          </PersistGate>
        </Provider>
      </Router>
    );
  }
}

export default App;
