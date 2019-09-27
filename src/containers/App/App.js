import React from 'react';
import Login from "../Login/Login";
import {Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import AuthRoute from "../AuthRoute/AuthRoute";
import Categories from "../Categories/Categories";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Layout>
          <Switch>
              <Route path="/login" component={Login}/>
              <AuthRoute path="/" component={Categories} />
          </Switch>
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
