import React from 'react';
import {Redirect, Route} from "react-router-dom";

const isAuthenticated = () => {
    return true;
};

const AuthRoute = ({ component: Component, ...routeProps }) => (
    <Route {...routeProps} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

export default AuthRoute;